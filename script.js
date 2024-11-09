let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    const randomNum = Math.random() * 3;

    if (randomNum <= 1)
        return "rock";
    else if (randomNum <= 2)
        return "paper";
    else
        return "scissors"
}

function getHumanChoice() {
    let choice = Number(window.prompt("Enter your choice! 1.) Rock 2.) Paper 3.) Scissors: "))

    if (choice === 1)
        return "rock";
    else if (choice === 2)
        return "paper";
    else if (choice === 3)
        return "scissors";
    
    alert("Invalid input, please enter a number between 1-3.");
    return getHumanChoice();
}

function playRound (comChoice, humanChoice) {
    switch (comChoice) {
        case "rock":
        if (humanChoice === "paper") {
            humanScore++;
            alert("You win! Paper beats Rock!");
        } else if (humanChoice === "scissors") {
            computerScore++;
            alert("You lose! Rock beats Scissors!");
        }
        else
            alert("Draw! You both chose Rock!")
        break;
        case "paper":
        if (humanChoice === "scissors") {
            humanScore++;
            alert("You win! Scissors beats Paper!");
        } else if (humanChoice === "rock") {
            computerScore++;
            alert("You lose! Paper beats Rock!");
        }
        else
            alert("Draw! You both chose Paper!")
        break;
        case "scissors":
        if (humanChoice === "rock") {
            humanScore++;
            alert("You win! Rock beats Scissors!");
        } else if (humanChoice === "paper") {
            computerScore++;
            alert("You lose! Scissors beats Paper!");
        }
        else
            alert("Draw! You both chose Scissors!")
        break;
    }
}

function playGame () {

    let humanSelection;
    let compSelection;

    for (let c = 0; c < 5; c++) {
        humanSelection = getHumanChoice();
        compSelection = getComputerChoice();
        playRound(compSelection, humanSelection);
    }

    if (humanScore > computerScore)
        console.log("Congratulations, you win!")
    else
        console.log("You lost! Better luck next time.")
}

// playGame();
console.log("Your Score: " + humanScore)
console.log("Computer Score: " + computerScore)