const onePlayer = document.getElementById("onePlayer");
const twoPlayers = document.getElementById("twoPlayers");
const playerSelect = document.getElementById("playerSelect");
const title = document.getElementById("title");
const menuDiv = document.getElementById("menuDiv");
const backMenu = document.getElementById("backMenu");
const roll = document.getElementById("roll");
const dice = document.getElementById("dice1")

// one player consts
const gameBox1 = document.getElementById("gameBox1");
const scoreTally = document.getElementById("scoreTally");
const rollTally = document.getElementById("rollTally");

// click on one player game in menu
onePlayer.addEventListener("click", () => {
    title.textContent = "One Player";
    playerSelect.style.display = "none";
    menuDiv.style.display = "block";
    gameBox1.style.display = "flex";
})

// click back to main menu
backMenu.addEventListener("click",() => {
    title.textContent = "Welcome to the Dice game!";
    playerSelect.style.display = "flex";
    menuDiv.style.display = "none";
    gameBox1.style.display = "none";
    roll.textContent = "roll";
    scoreTally.textContent = 0;
    rollTally.textContent = 0;
})

// roll number generator
let score = 0;
let rolls = 0;

lostPopUp = () => {
    title.textContent = "You lost!";
        roll.textContent = "Play again";
        score = 0;
        rolls = 0;
};

winPopUp = () => {
    title.textContent = "You Won!";
    score = 0;
    rolls = 0;
    roll.textContent = "Play again";
};

scoreUp = () => {
    scoreTally.textContent = score;
    rollTally.textContent = rolls;
};

roll.addEventListener("click", () => {
    let randNum = (Math.ceil(Math.random() * 6));
    if (roll.textContent != "Play again")
        for (let i = 1; i <= 6; i++) {
            dice.classList.remove(`show-${i}`);
            if (randNum === i) {
            dice.classList.add(`show-${i}`);
            }
        }
    if (roll.textContent == "Play again"){
        roll.textContent = "Roll";
        title.textContent = "One Player";
        scoreTally.textContent = 0;
        rollTally.textContent = 0;
    } else if (randNum === 1){
        setTimeout(lostPopUp, 1000);
    } else{
        score = score + randNum;
        rolls = rolls + 1;
        setTimeout(scoreUp, 1000);
        } if (score >= 20){
            setTimeout(winPopUp, 1000);
        }     
})