let gameMatrix = [
    [0,-1,1],
    [1,0,-1],
    [-1,1,0]
]

let moveMatrix = ["Rock", "Paper", "Scissors"]

resultText = document.querySelector("p.result");
scoreText = document.querySelector("p.score");
nRounds = 5;

roundsText = document.querySelector(".nRounds .count");
nRoundsInc = document.querySelector(".nRounds .plus");
nRoundsDec = document.querySelector(".nRounds .minus");

document.querySelector(".launch .outerCircle").onclick = () => switchPage(".launch", ".nRounds");
document.querySelector(".nRounds h1").onclick = () => switchPage(".nRounds", ".launch");

nRoundsInc.onclick = () => updateCount(1);
nRoundsDec.onclick = () => updateCount(-1);

function switchPage(curr, next) {
    document.querySelector(curr).style.display = "none";
    document.querySelector(next).style.display = "flex";
}

function updateCount(inc) {
    if (inc == -1 && nRounds == 1) {
        inc = 0
    } else if (inc == 1 && nRounds == 10) {
        inc = 0
    }

    nRounds += inc;
    roundsText.innerHTML = nRounds;
}

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