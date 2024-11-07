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

