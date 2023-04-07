// Create function "getComputerChoice" to get computer's choice.
// Use random to select the choice. If random < 0.33 select Rock,
// if 0.33 < random < 0.66 select Paper, else select scissors.
function getComputerChoice() {
    const random = Math.random().toFixed(3);
    console.log(random);
    return random < 0.333 ? "Rock"
                : random < 0.666 ? "Paper"
                : "Scissors";
    
     }   


function game() {
    const playerSelection = prompt("Type in your choice", "rock").toLowerCase();
    const computerSelection = getComputerChoice();
    console.log(computerSelection);
    console.log(playRound(playerSelection, computerSelection));

  function playRound(playerSelection, computerSelection) {
        
    return (playerSelection === "rock" && computerSelection === "Paper") ? "You lose! Paper beats Rock"
         : (playerSelection === "rock" && computerSelection === "Scissors") ? "You win! Rock beats Scissors"
         : (playerSelection === "paper" && computerSelection === "Rock") ? "You win! Paper beats Rock"
         : (playerSelection === "paper" && computerSelection === "Scissors") ? "You lose! Scissors beats Paper"
         : (playerSelection === "scissors" && computerSelection === "Rock") ? "You lose! Rock beats Scissors"
         : (playerSelection === "scissors" && computerSelection === "Paper") ? "You win! Scissors beats Paper"
         : "No winners";
    }
    

    
    let playerScore = 0
    let computerScore = 0
    if (playRound(playerSelection, computerSelection).slice(4,5) === "w") {
        playerScore = playerScore + 1
    } else if (playRound(playerSelection, computerSelection).slice(4,5) ==="l") {
        computerScore = computerScore + 1;
    }
    console.log(playerScore);
}
game();

// Fix canceled prompt

