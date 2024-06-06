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

    let choice = parseInt(
        prompt("Press 1 for rock, 2 for paper, and 3 for scissors!")
    );

    switch (choice) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
        default:
            alert("Not a valid option!");
            break;
    }
}
