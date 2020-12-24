function computerPlay () {
    play = Math.floor(Math.random()*3)

    switch (play) {
        case 0:
            return "Paper";
        case 1:
            return "Scissors";
        case 2:
            return "Stone";
        default:
            return "A Problem Ocurred"
    }
    
}

function playRound (playerSelection, computerSelection) {
    if (
        (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "stone")||
        (playerSelection.toLowerCase() == "stone" && computerSelection.toLowerCase() == "scissors")||
        (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "paper")
    ) {
        return `Ỳou win, ${playerSelection.toLowerCase()} beats ${computerSelection.toLowerCase()}!!`;

    } else if (
        (playerSelection.toLowerCase() == "stone" && computerSelection.toLowerCase() == "paper")||
        (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "stone")||
        (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "scissors")
    ) {
        return `Ỳou lose, ${computerSelection.toLowerCase()} beats ${playerSelection.toLowerCase()}...`;
    } else if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        return `It's a tie! You both chose ${playerSelection.toLowerCase()}.`;
    }
}

function game () {
    for (i=0; i<5; i++) {
        console.log(playRound(prompt("Make your choice:", "paper"), computerPlay()));
    }
}

game()