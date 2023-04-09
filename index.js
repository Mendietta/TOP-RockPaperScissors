const playerText = document.querySelector('#playerText');
const computerText = document.querySelector('#computerText');
const resultText = document.querySelector('#resultText');
const btnChoice = document.querySelectorAll('.button');
let playerChoice;
let computerChoice;
let result;
let yourScore = 0;
let computerScore = 0;


btnChoice.forEach(button => button.addEventListener('click', () => {
    playerChoice = button.textContent;
    getComputerChoice();
    resultText.textContent = checkWinner();
    if (resultText.textContent == "You Win!") {
        yourScore++;
    } else if (resultText.textContent == "You Lose!") {
        computerScore++;
    }
    playerText.textContent = `Player: ${playerChoice} ${yourScore}`;
    computerText.textContent = `Computer: ${computerChoice} ${computerScore}`;
}));

function getComputerChoice () {
    const random = Math.floor(Math.random() * 3) + 1;
    switch(random){
        case 1:
            computerChoice = "ROCK";
            break;
        case 2:
            computerChoice = "PAPER";
            break;
        case 3:
            computerChoice = "SCISSORS";
            break;
    }
}   

function checkWinner() {

    if (playerChoice == computerChoice) {
        return "Draw!";
    } else if (computerChoice == "ROCK") {
      return playerChoice == "PAPER" ? "You Win!" : "You Lose!";
    } else if (computerChoice == "PAPER") {
        return playerChoice == "SCISSORS" ? "You Win!" : "You Lose!";
    } else {
        return playerChoice == "ROCK" ? "You Win!" : "You Lose!";
    };
};

