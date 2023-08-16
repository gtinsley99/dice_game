const onePlayer = document.getElementById("onePlayer");
const twoPlayers = document.getElementById("twoPlayers");
const playerSelect = document.getElementById("playerSelect");
const title = document.getElementById("title");
const menuDiv = document.getElementById("menuDiv");
const backMenu = document.getElementById("backMenu");

// one player consts
const oneTitle = document.getElementById("oneTitle");

// click on one player game in menu
onePlayer.addEventListener("click", () => {
    title.textContent = "One Player";
    playerSelect.style.display = "none";
    menuDiv.style.display = "flex";
})

// click back to main menu
backMenu.addEventListener("click",() => {
    title.textContent = "Welcome to the Dice game!";
    playerSelect.style.display = "flex";
    menuDiv.style.display = "none";
})
