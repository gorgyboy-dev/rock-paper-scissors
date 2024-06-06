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
