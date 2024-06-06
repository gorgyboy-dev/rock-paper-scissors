function getComputerChoice() {
    let num = Math.floor(Math.random() * 100);

    if (num < 33) {
        return "rock";
    } else if (num < 66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Type your option!").toLowerCase();

    switch (choice) {
        case "rock":
            return "rock";
        case "paper":
            return "paper";
        case "scissors":
            return "scissors";
        default:
            alert("Not a valid option!");
            break;
    }
}

function playRound(humanChoice, computerChoice) {
    switch (humanChoice) {
        case "rock":
            switch (computerChoice) {
                case "scissors":
                    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
                    humanScore++;
                    break;
                case "paper":
                    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
                    computerScore++;
                    break;
                default:
                    console.log(`A draw! both have chosen ${humanChoice}`);
                    break;
            }
            break;
        case "paper":
            switch (computerChoice) {
                case "rock":
                    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
                    humanScore++;
                    break;
                case "scissors":
                    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
                    computerScore++;
                    break;
                default:
                    console.log(`A draw! both have chosen ${humanChoice}`);
                    break;
            }
            break;
        case "scissors":
            switch (computerChoice) {
                case "paper":
                    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
                    humanScore++;
                    break;
                case "rock":
                    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
                    computerScore++;
                    break;
                default:
                    console.log(`A draw! both have chosen ${humanChoice}`);
                    break;
            }
            break;
        default:
            alert("Not a valid option!");
            break;
    }
}

function playGame() {
    let humanSelection;
    let computerSelection;

    for (let i = 0; i < 5; i++) {
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        console.log(`You have beaten the computer with a score of ${humanScore} vs. ${computerScore}`);
    } else if (humanScore < computerScore) {
        console.log(`You have been beaten by the computer with a score of ${computerScore} vs. ${humanScore}`);
    } else {
        console.log(`It's a draw with the computer with a score of ${humanScore} vs. ${computerScore}`);
    }
}

let humanScore = 0;
let computerScore = 0;

playGame();
