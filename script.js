const onePlayer = document.getElementById("onePlayer");
const twoPlayers = document.getElementById("twoPlayers");
const playerSelect = document.getElementById("playerSelect");
const title = document.getElementById("title");
const menuDiv = document.getElementById("menuDiv");
const backMenu = document.getElementById("backMenu");
const roll = document.getElementById("roll");
const dice = document.getElementById("dice1")
const titleSection = document.getElementById("titleSection");
const topSection = document.getElementById("topSection");

// one player consts
const gameBox1 = document.getElementById("gameBox1");
const scoreTally = document.getElementById("scoreTally");
const rollTally = document.getElementById("rollTally");

// click on one player game in menu
onePlayer.addEventListener("click", () => {
    title.textContent = "One Player";
    titleSection.style.marginBottom = "4%";
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

// for score and roll tally
let score = 0;
let rolls = 0;

// function for when roll a 1
lostPopUp = () => {
    title.textContent = "You lost!";
        roll.textContent = "Play again";
        score = 0;
        rolls = 0;
};

// function for when score >= 20
winPopUp = () => {
    title.textContent = "You Won!";
    score = 0;
    rolls = 0;
    roll.textContent = "Play again";
};

// function for when roll 2-6
scoreUp = () => {
    scoreTally.textContent = score;
    rollTally.textContent = rolls;
};

// dice roll core code
roll.addEventListener("click", () => {
    let randNum = (Math.ceil(Math.random() * 6));
    // dice animation to number rolled
    if (roll.textContent != "Play again")
        for (let i = 1; i <= 6; i++) {
            dice.classList.remove(`show-${i}`);
            if (randNum === i) {
            dice.classList.add(`show-${i}`);
            }
        }
    // reset score and roll count, play again button
    if (roll.textContent == "Play again"){
        roll.textContent = "Roll";
        title.textContent = "One Player";
        scoreTally.textContent = 0;
        rollTally.textContent = 0;
    // when lose (roll a 1)
    } else if (randNum === 1){
        setTimeout(lostPopUp, 1000);
    // when roll 2-6 
    } else{
        score = score + randNum;
        rolls = rolls + 1;
        setTimeout(scoreUp, 1000);
        } if (score >= 20){
            setTimeout(winPopUp, 1000);
        }     
})