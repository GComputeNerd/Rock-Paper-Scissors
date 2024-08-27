let gameMatrix = [
    [0,-1,1],
    [1,0,-1],
    [-1,1,0]
]

let moveMatrix = ["Rock", "Paper", "Scissors"]

resultText = document.querySelector("p.result");
scoreText = document.querySelector("p.score");

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

function updateScore(winner) {
    score = scoreText.innerHTML.split(" ");
    playerScore = parseInt(score[0]);
    computerScore = parseInt(score[2]);

    if (result == 1) {
        playerScore += 1;
    } else if (result == -1) {
        computerScore += 1;
    }

    scoreText.innerHTML = playerScore.toString() + " - " + computerScore.toString();
}

function playGame(playerChoice) {
    computerChoice = getComputerChoice();
    result = gameMatrix[playerChoice][computerChoice];
    resHTML = moveMatrix[playerChoice] + " vs " + moveMatrix[computerChoice];

    if (result == 0) {
        resultText.innerHTML = resHTML + " = DRAW!";
    } else if (result == 1) {
        resultText.innerHTML = resHTML + " = WIN!";
        updateScore(1);
    } else {
        resultText.innerHTML = resHTML + " = LOSE!";
        updateScore(-1);
    }
}