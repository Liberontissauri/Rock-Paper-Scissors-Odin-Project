function computerPlay () {
    play = Math.floor(Math.random()*3)

    switch (play) {
        case 0:
            return "Paper";
        case 1:
            return "Scissors";
        case 2:
            return "Rock";
        default:
            return "A Problem Ocurred"
    }
    
}

function playRound (playerSelection, computerSelection) { // Returns 0 on loss; 1 on win and 2 on tie
    if (
        (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "rock")||
        (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "scissors")||
        (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "paper")
    ) {
        return 1;

    } else if (
        (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "paper")||
        (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "rock")||
        (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "scissors")
    ) {
        return 0;
    } else if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        return 2;
    }
}

function game () {
    const rockBtn = document.querySelector("#RockButton");
    const paperBtn = document.querySelector("#PaperButton");
    const scissorsBtn = document.querySelector("#ScissorsButton");

    rockBtn.addEventListener("click", () =>  {
        updateDisplay ("Rock", computerPlay());
    })

    paperBtn.addEventListener("click", () =>  {
        updateDisplay ("Paper", computerPlay());
    })

    scissorsBtn.addEventListener("click", () =>  {
        updateDisplay ("Scissors", computerPlay());
    })
}

function updateDisplay (playerSelection, computerSelection) {
    const playerSquare = document.querySelector("#PlayerSelection");

    const computerSquare = document.querySelector("#ComputerSelection")

    const ChoiceText = document.querySelector("#ChoiceText");

    playerSquare.style.visibility = "visible";
    computerSquare.style.visibility = "visible";
    
    switch (playerSelection) {
        case "Paper":
            playerSquare.src = "images/paper_symbol.png";
            break;
        case "Rock":
            playerSquare.src = "images/rock_symbol.png";
            break;
        case "Scissors":
            playerSquare.src = "images/scissors_symbol.png";
            break;
    }
    switch (computerSelection) {
        case "Paper":
            computerSquare.src = "images/paper_symbol.png";
            break;
        case "Rock":
            computerSquare.src = "images/rock_symbol.png";
            break;
        case "Scissors":
            computerSquare.src = "images/scissors_symbol.png";
            break;
    }

    switch (playRound(playerSelection, computerSelection)){
        case 0:
            ChoiceText.textContent = "You Lost";
            break;
        case 1:
            ChoiceText.textContent = "You Won";
            break;
        case 2:
            ChoiceText.textContent = "It's a Tie";
            break;
    }

    setTimeout(() => ChoiceText.textContent = "Make your choice:", 1000);
}

game()