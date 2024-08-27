let gameMatrix = [
    [0,-1,1],
    [1,0,-1],
    [-1,1,0]
]

let moveMatrix = ["Rock", "Paper", "Scissors"]

resultText = document.querySelector("p.result");

function getComputerChoice() {
    let choice = Math.random();

    if (choice < 0.3) {
        return 0;
    } else if (choice < 0.6) {
        return 1;
    } else {
        return 2;
    }
}

function playGame(playerChoice) {
    computerChoice = getComputerChoice();
    result = gameMatrix[playerChoice][computerChoice];
    resHTML = moveMatrix[playerChoice] + " vs " + moveMatrix[computerChoice];

    if (result == 0) {
        resultText.innerHTML = resHTML + " = DRAW!";
    } else if (result == 1) {
        resultText.innerHTML = resHTML + " = WIN!";
    } else {
        resultText.innerHTML = resHTML + " = LOSE!";
    }
}