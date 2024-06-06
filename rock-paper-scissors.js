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

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

    switch (humanChoice) {
        case "rock":
            switch (computerChoice) {
                case "paper":
                    console.log(
                        `You lose! ${computerChoice} beats ${humanChoice}`);
                    computerScore++;
                    break;
                case "scissors":
                    console.log(
                        `You win! ${humanChoice} beats ${computerChoice}`);
                    humanScore++;
                    break;
                default:
                    console.log(
                        `A draw! both have chosen ${humanChoice}`);
                    break;
            }
            break;
        case "paper":
            switch (computerChoice) {
                case "scissors":
                    console.log(
                        `You lose! ${computerChoice} beats ${humanChoice}`);
                    computerScore++;
                    break;
                case "rock":
                    console.log(
                        `You win! ${humanChoice} beats ${computerChoice}`);
                    humanScore++;
                    break;
                default:
                    console.log(
                        `A draw! both have chosen ${humanChoice}`);
                    break;
            }
            break;
        case "scissors":
            switch (computerChoice) {
                case "rock":
                    console.log(
                        `You lose! ${computerChoice} beats ${humanChoice}`);
                    computerScore++;
                    break;
                case "paper":
                    console.log(
                        `You win! ${humanChoice} beats ${computerChoice}`);
                    humanScore++;
                    break;
                default:
                    console.log(
                        `A draw! both have chosen ${humanChoice}`);
                    break;
            }
            break;
        default:
            alert("Not a valid option!");
            break;
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
console.log(humanScore + " --- " + computerScore);