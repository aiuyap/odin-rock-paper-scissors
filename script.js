let humanScore = 0;
let computerScore = 0;
let displayHumanScore = document.querySelector("#human-score");
let displayComputerScore = document.querySelector("#computer-score");
let displayRoundResult = document.querySelector("#result-message");

const rockButton = document.querySelector("#rock");
rockButton.addEventListener("click", () => {
    const compSelection = getComputerChoice();
    const humanSelection = "rock";
    playRound(compSelection, humanSelection);
    checkWinner();
});

const paperButton = document.querySelector("#paper");
paperButton.addEventListener("click", () => {
    const compSelection = getComputerChoice();
    const humanSelection = "paper";
    playRound(compSelection, humanSelection);
    checkWinner();
});

const scissorsButton = document.querySelector("#scissors");
scissorsButton.addEventListener("click", () => {
    const compSelection = getComputerChoice();
    const humanSelection = "scissors";
    playRound(compSelection, humanSelection);
    checkWinner();
});


function getComputerChoice() {
    const randomNum = Math.random() * 3;

    if (randomNum <= 1)
        return "rock";
    else if (randomNum <= 2)
        return "paper";
    else
        return "scissors";
}

function playRound (comChoice, humanChoice) {
    switch (comChoice) {
        case "rock":
        if (humanChoice === "paper") {
            humanScore++;
            displayRoundResult.textContent = "You win! Paper beats Rock!";
            displayHumanScore.textContent = humanScore.toString();
        } else if (humanChoice === "scissors") {
            computerScore++;
            displayRoundResult.textContent = "You lose! Rock beats Scissors!";
            displayComputerScore.textContent = computerScore.toString();
        }
        else
            displayRoundResult.textContent = "Draw! You both chose Rock!";
        break;
        case "paper":
        if (humanChoice === "scissors") {
            humanScore++;
            displayRoundResult.textContent = "You win! Scissors beats Paper!";
            displayHumanScore.textContent = humanScore.toString();
        } else if (humanChoice === "rock") {
            computerScore++;
            displayRoundResult.textContent = "You lose! Paper beats Rock!";
            displayComputerScore.textContent = computerScore.toString();
        }
        else
            displayRoundResult.textContent = "Draw! You both chose Paper!";
        break;
        case "scissors":
        if (humanChoice === "rock") {
            humanScore++;
            displayRoundResult.textContent = "You win! Rock beats Scissors!";
            displayHumanScore.textContent = humanScore.toString();
        } else if (humanChoice === "paper") {
            computerScore++;
            displayRoundResult.textContent = "You lose! Scissors beats Paper!";
            displayComputerScore.textContent = computerScore.toString();
        }
        else
            displayRoundResult.textContent = "Draw! You both chose Scissors!";
        break;
    }
}

function checkWinner () {
    if (humanScore === 5 || computerScore === 5) {
        if (humanScore > computerScore) {
            displayRoundResult.textContent += " Congratulations! You won the game.";
            createRestartButton();
            disableButtons();
        }  
        else {
            displayRoundResult.textContent += " You lost the game! Better luck next time.";
            createRestartButton();
            disableButtons();
        }
            
    }
}

function createRestartButton () {
    const resultPage = document.querySelector("#results");
    const restartButton = document.createElement("button");
    resultPage.appendChild(restartButton);
    restartButton.textContent = "Play Again";
    restartButton.addEventListener("click", () => {
        humanScore = 0;
        computerScore = 0;
        displayHumanScore.textContent = humanScore.toString();
        displayComputerScore.textContent = humanScore.toString();
        displayRoundResult.textContent = "";
        resultPage.removeChild(restartButton);
        enableButtons();
    });
}

function disableButtons () {
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
}

function enableButtons () {
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
}