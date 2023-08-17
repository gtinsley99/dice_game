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
const gameBox = document.getElementById("gameBox");

// one player consts
const oneBox = document.getElementById("oneBox");
const scoreTally = document.getElementById("scoreTally");
const rollTally = document.getElementById("rollTally");

// two player consts
const twoBoxes = document.getElementById("twoBoxes");
const playerBoxOne = document.getElementById("playerBoxOne")
const playerBoxTwo = document.getElementById("playerBoxTwo")
const rollOne = document.getElementById("rollOne");
const rollTwo = document.getElementById("rollTwo");
const totalScoreTallyOne = document.getElementById("totalScoreTallyOne");
const turnScoreTallyOne = document.getElementById("turnScoreTallyOne");
const turnRollsTallyOne = document.getElementById("turnRollsTallyOne");
const endTurnOne = document.getElementById("endTurnOne");
const totalScoreTallyTwo = document.getElementById("totalScoreTallyTwo");
const turnScoreTallyTwo = document.getElementById("turnScoreTallyTwo");
const turnRollsTallyTwo = document.getElementById("turnRollsTallyTwo");
const endTurnTwo = document.getElementById("endTurnTwo");

// Disable buttons for player 2
rollTwo.disabled = true;
endTurnTwo.disabled = true;


// click on one player game in menu
onePlayer.addEventListener("click", () => {
    title.textContent = "One Player";
    titleSection.style.marginBottom = "4%";
    playerSelect.style.display = "none";
    menuDiv.style.display = "block";
    gameBox.style.display = "flex";
    oneBox.style.display = "flex";
    twoBoxes.style.display = "none";
})

// click on two player game in menu
twoPlayers.addEventListener("click", () => {
    title.textContent = "Two Players";
    titleSection.style.marginBottom = "4%";
    playerSelect.style.display = "none";
    menuDiv.style.display = "block";
    gameBox.style.display = "flex";
    twoBoxes.style.display = "flex";
    oneBox.style.display = "none";
})

// click back to main menu
backMenu.addEventListener("click",() => {
    title.textContent = "Welcome to the Dice game!";
    playerSelect.style.display = "flex";
    menuDiv.style.display = "none";
    gameBox.style.display = "none";
})

// for score and roll tally
let score = 0;
let rolls = 0;
let prevRoll = 1;

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

// dice roll one player
roll.addEventListener("click", () => {
    rollDice();
    })

// dice roll function
rollDice = () => {
    let randNum = (Math.ceil(Math.random() * 6));
    // dice animation to number rolled
    if (roll.textContent != "Play again")
        for (let i = 1; i <= 6; i++) {
            dice.classList.remove("show-" + i);
            if (randNum == i){
                   // if number is rolled twice add animation
            if (randNum === prevRoll){
                dice.classList.add("show-" + (prevRoll - 1));
                setTimeout(() => {
                    dice.classList.remove("show-" + (prevRoll - 1));
                    dice.classList.add("show-" + i);
                }, 300)
            } else {
                dice.classList.add("show-" + i);
            }
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
        prevRoll = randNum; 
}

// two player section

// function for player 1 go
playerOneTurn = () => {
    playerBoxOne.style.opacity = "1";
    playerBoxOne.style.border = "5px solid rgb(78, 255, 7)";
    rollOne.disabled = false;
    endTurnOne.disabled = false;
    playerBoxTwo.style.opacity = "0.5";
    playerBoxTwo.style.border = "5px solid grey";
    rollTwo.disabled = true;
    endTurnTwo.disabled = true;
}

// function for player 2 go
playerTwoTurn = () => {
    playerBoxOne.style.opacity = "0.5";
    playerBoxOne.style.border = "5px solid grey";
    rollOne.disabled = true;
    endTurnOne.disabled = true;
    playerBoxTwo.style.opacity = "1";
    playerBoxTwo.style.border = "5px solid rgb(78, 255, 7)";
    rollTwo.disabled = false;
    endTurnTwo.disabled = false;
}

// function for layout after any player wins
endLayout = () => {
    playerBoxOne.style.opacity = "1";
    playerBoxTwo.style.opacity = "1";
    playerBoxOne.style.border = "5px solid grey";
    playerBoxTwo.style.border = "5px solid grey";
    endTurnOne.disabled = true;
    endTurnTwo.disabled = true;
    rollOne.disabled = false;
    rollTwo.disabled = false;
}

// function for play again
playAgain = () => {
    rollOne.textContent = "Roll";
    rollTwo.textContent = "Roll";
    title.textContent = "Two Players";
    oneScore = 0;
    oneRolls = 0;
    oneTotalScore = 0;
    twoScore = 0;
    twoRolls = 0;
    twoTotalScore = 0;
    totalScoreTallyOne.textContent = oneTotalScore;
    turnScoreTallyOne.textContent = oneScore;
    turnRollsTallyOne.textContent = oneRolls;
    totalScoreTallyTwo.textContent = twoTotalScore;
    turnScoreTallyTwo.textContent = twoScore;
    turnRollsTallyTwo.textContent = twoRolls;
}

rollOne.addEventListener("click", () => {
    rollDiceOne();
})

rollTwo.addEventListener("click", () => {
    rollDiceTwo();
})

let oneScore = 0;
let oneRolls = 0;
let twoScore = 0;
let twoRolls = 0;
let oneTotalScore = 0;
let twoTotalScore = 0;

// function for when player 1 rolls a one
playerOneRollOne = () => {
    // loses current score, total score goes back to only banked score
    oneTotalScore = oneTotalScore - oneScore;
    totalScoreTallyOne.textContent = oneTotalScore;
    // reset rolls and score
    oneScore = 0;
    oneRolls = 0;
    turnRollsTallyOne.textContent = oneRolls;
    turnScoreTallyOne.textContent = oneScore;
}

// function for when player 1 rolls 2-6
oneScoreUp = () => {
    turnScoreTallyOne.textContent = oneScore;
    turnRollsTallyOne.textContent = oneRolls;
    totalScoreTallyOne.textContent = oneTotalScore;
};

// fucntion for when player 1 wins
oneWins = () => {
    title.textContent = "Player 1 wins!";
    rollOne.textContent = "Play again";
    rollTwo.textContent = "Play again";
}

// function for when player 1 rolls
rollDiceOne = () => {
    let randNum = (Math.ceil(Math.random() * 6));
    // dice animation to number rolled
    if (rollOne.textContent != "Play again")
        for (let i = 1; i <= 6; i++) {
            dice.classList.remove("show-" + i);
            if (randNum == i){
                   // if number is rolled twice add animation
            if (randNum === prevRoll){
                dice.classList.add("show-" + (prevRoll - 1));
                setTimeout(() => {
                    dice.classList.remove("show-" + (prevRoll - 1));
                    dice.classList.add("show-" + i);
                }, 300)
            } else {
                dice.classList.add("show-" + i);
            }
            }   
        }
    // reset score and roll count, play again button
    if (rollOne.textContent == "Play again" || rollTwo.textContent == "Play again"){
        playerOneTurn();
        playAgain();
    // when roll a 1
    } else if (randNum === 1){
      setTimeout(playerOneRollOne, 1000);
      setTimeout(playerTwoTurn, 1000);
    // when roll 2-6 
    } else{
        oneScore = oneScore + randNum;
        oneRolls = oneRolls + 1;
        oneTotalScore = oneTotalScore + randNum;
        setTimeout(oneScoreUp, 1000);
        } if (oneTotalScore >= 20){
            setTimeout(oneWins, 1000);
            setTimeout(endLayout, 1000);
        }        
        prevRoll = randNum; 
}

// function for when player 1 holds
endTurnOne.addEventListener("click", () => {
    totalScoreTallyOne.textContent =  oneTotalScore;
    oneScore = 0;
    oneRolls = 0; 
    turnScoreTallyOne.textContent = oneScore;
    turnRollsTallyOne.textContent = oneRolls;
    playerTwoTurn();
})
   
// function for when player 2 rolls a one
playerTwoRollOne = () => {
    // loses current score, total score goes back to only banked score
    twoTotalScore = twoTotalScore - twoScore;
    totalScoreTallyTwo.textContent = twoTotalScore;
    // reset rolls and score
    twoScore = 0;
    twoRolls = 0;
    turnRollsTallyTwo.textContent = twoRolls;
    turnScoreTallyTwo.textContent = twoScore;
}

// function for when player 1 rolls 2-6
twoScoreUp = () => {
    turnScoreTallyTwo.textContent = twoScore;
    turnRollsTallyTwo.textContent = twoRolls;
    totalScoreTallyTwo.textContent = twoTotalScore;
};

// fucntion for when player 1 wins
twoWins = () => {
    title.textContent = "Player 2 wins!";
    rollOne.textContent = "Play again";
    rollTwo.textContent = "Play again";
}

// function for when player 2 rolls
rollDiceTwo = () => {
    let randNum = (Math.ceil(Math.random() * 6));
    // dice animation to number rolled
    if (rollOne.textContent != "Play again")
        for (let i = 1; i <= 6; i++) {
            dice.classList.remove("show-" + i);
            if (randNum == i){
                   // if number is rolled twice add animation
            if (randNum === prevRoll){
                dice.classList.add("show-" + (prevRoll - 1));
                setTimeout(() => {
                    dice.classList.remove("show-" + (prevRoll - 1));
                    dice.classList.add("show-" + i);
                }, 300)
            } else {
                dice.classList.add("show-" + i);
            }
            }   
        }
    // reset score and roll count, play again button
    if (rollTwo.textContent == "Play again" || rollOne.textContent == "Play again"){
        playAgain();
        playerOneTurn();
    // when roll a 1
    } else if (randNum === 1){
      setTimeout(playerTwoRollOne, 1000);
      setTimeout(playerOneTurn, 1000);
    // when roll 2-6 
    } else{
        twoScore = twoScore + randNum;
        twoRolls = twoRolls + 1;
        twoTotalScore = twoTotalScore + randNum;
        setTimeout(twoScoreUp, 1000);
        } if (twoTotalScore >= 20){
            setTimeout(twoWins, 1000);
            setTimeout(endLayout, 1000);
        }        
        prevRoll = randNum; 
}

// function for when player 2 holds
endTurnTwo.addEventListener("click", () => {
    totalScoreTallyTwo.textContent =  twoTotalScore; 
    twoScore = 0;
    twoRolls = 0; 
    turnScoreTallyTwo.textContent = twoScore;
    turnRollsTallyTwo.textContent = twoRolls;
    playerOneTurn();
}) 