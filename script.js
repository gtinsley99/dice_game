const onePlayer = document.getElementById("onePlayer");
const twoPlayers = document.getElementById("twoPlayers");
const playerSelect = document.getElementById("playerSelect");
const title = document.getElementById("title");
const menuDiv = document.getElementById("menuDiv");
const backMenu = document.getElementById("backMenu");
const roll = document.getElementById("roll");

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
})

// roll number generator
let score = 0;
let rolls = 0;
roll.addEventListener("click", () => {
    randNum = (Math.ceil(Math.random() * 6));
    if (roll.textContent == "Play again"){
        roll.textContent = "Roll";
        title.textContent = "One Player";
        scoreTally.textContent = 0;
        rollTally.textContent = 0;
    } else if (randNum === 1){
        title.textContent = "You lost!";
        roll.textContent = "Play again";
        score = 0;
        rolls = 0;
    } else{
        title.textContent = "One Player";
        score = score + randNum;
        rolls = rolls + 1;
        scoreTally.textContent = score;
        rollTally.textContent = rolls;
        } if (score >= 20){
            title.textContent = "You Won!";
            score = 0;
            rolls = 0;
            roll.textContent = "Play again";
        }     
})

