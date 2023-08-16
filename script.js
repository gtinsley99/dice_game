const onePlayer = document.getElementById("onePlayer");
const twoPlayers = document.getElementById("twoPlayers");
const playerSelect = document.getElementById("playerSelect");
const title = document.getElementById("title");
const menuDiv = document.getElementById("menuDiv");
const backMenu = document.getElementById("backMenu");
const roll = document.getElementById("roll");

// one player consts
const oneTitle = document.getElementById("oneTitle");
const gameBox1 = document.getElementById("gameBox1");
const score = document.getElementById("score");
const rolls = document.getElementById("rolls");
const wins = document.getElementById("wins");

// click on one player game in menu
onePlayer.addEventListener("click", () => {
    title.textContent = "One Player";
    playerSelect.style.display = "none";
    menuDiv.style.display = "flex";
    gameBox1.style.display = "flex";
})

// click back to main menu
backMenu.addEventListener("click",() => {
    title.textContent = "Welcome to the Dice game!";
    playerSelect.style.display = "flex";
    menuDiv.style.display = "none";
})

// roll number generator
// roll.addEventListener("click", () => {
//     let randNum = [];
//     randNum.push(Math.ceil(Math.random() * 5));
//     score = `score : ${randNum + }`
// })

