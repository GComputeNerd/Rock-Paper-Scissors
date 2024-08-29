let gameMatrix = [
    [0,-1,1],
    [1,0,-1],
    [-1,1,0]
]

let moveMatrix = ["Rock", "Paper", "Scissors"]

resultText = document.querySelector("p.result");
scoreTexts = document.querySelectorAll("p.score");
playerMoveText = document.querySelector(".roundResult p.choice")
nRounds = 5;
currRound = 1;

roundsText = document.querySelector(".nRounds .count");
nRoundsInc = document.querySelector(".nRounds .plus");
nRoundsDec = document.querySelector(".nRounds .minus");

document.querySelector(".launch .outerCircle").onclick = () => switchPage(".launch", ".nRounds");
document.querySelector(".nRounds h1").onclick = () => switchPage(".nRounds", ".launch");
document.querySelector(".roundResult .nextButton").onclick = () => nextRound();

nRoundsInc.onclick = () => updateCount(1);
nRoundsDec.onclick = () => updateCount(-1);

playerButtons = document.querySelectorAll(".roundResult .playerChoice .buttons .outerCircle");
computerButtons = document.querySelectorAll(".roundResult .computerChoice .buttons .outerCircle");

roundNumberTexts = document.querySelectorAll(".roundNumber h1");

// Add onclicks for player buttons
playerRockBtn = document.querySelector(".playerChoice .rock")
playerPaperBtn = document.querySelector(".playerChoice .paper")
playerScissorsBtn = document.querySelector(".playerChoice .scissors")
compRockBtn = document.querySelector(".computerChoice .rock")
compPaperBtn = document.querySelector(".computerChoice .paper")
compScissorsBtn = document.querySelector(".computerChoice .scissors")

playerRockBtn.onclick = () => playGame(0);
playerPaperBtn.onclick = () => playGame(1);
playerScissorsBtn.onclick = () => playGame(2);

document.querySelector(".playAgain").onclick = () => {switchPage(".finalResult", ".launch")};

function switchPage(curr, next) {
    document.querySelector(curr).style.display = "none";
    document.querySelector(next).style.display = "flex";
}

function startGame() {
    nRounds = parseInt(roundsText.innerHTML);
    currRound = 1;
    switchPage(".nRounds", ".game");
    
    roundNumberTexts[0].innerHTML = "ROUND " + currRound;
    roundNumberTexts[1].innerHTML = "ROUND " + currRound;

    scoreTexts[0].innerHTML = "Score : 0 - 0";
    scoreTexts[1].innerHTML = "Score : 0 - 0";

    for (let i=0;i<3;i++) {
        playerButtons[i].style.opacity = "60%";
        computerButtons[i].style.opacity = "50%";
    }

    document.querySelector("p.next").innerHTML = "Next";
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

function updateScore(result) {
    score = scoreTexts[0].innerHTML.split(" ");
    console.log(score);
    playerScore = parseInt(score[2]);
    computerScore = parseInt(score[4]);

    if (result == 1) {
        playerScore += 1;
    } else if (result == -1) {
        computerScore += 1;
    }

    score = "Score : " + playerScore.toString() + " - " + computerScore.toString();

    for (let i=0; i<2; i++) {
        console.log(scoreTexts[i]);
        scoreTexts[i].innerHTML = score;
    }
}

function playGame(playerChoice) {
    computerChoice = getComputerChoice();
    result = gameMatrix[playerChoice][computerChoice];
    switchPage(".game", ".roundResult");
    playerButtons[playerChoice].style.opacity = "100%";
    computerButtons[computerChoice].style.opacity = "100%";

    playerMoveText.innerHTML = moveMatrix[playerChoice] + " !";

    if (result == 0) {
        resultText.innerHTML = "DRAW";
    } else if (result == 1) {
        resultText.innerHTML = "You Win !";
    } else {
        resultText.innerHTML = "Computer Wins !";
    }

    updateScore(result);

    if (currRound == nRounds) {
        document.querySelector("p.next").innerHTML = "Finish"
    }
}

function nextRound() {
    if (currRound == nRounds) {
        switchPage(".roundResult", ".finalResult");

        finalText = document.querySelector(".finalResult p");

        score = scoreTexts[0].innerHTML.split(" ");
        playerScore = parseInt(score[2]);
        computerScore = parseInt(score[4]);

        if (playerScore > computerScore) {
            finalText.innerHTML = "YOU WIN !";
        } else if (playerScore < computerScore) {
            finalText.innerHTML = "YOU LOSE !";
        } else {
            finalText.innerHTML = "DRAW !";
        }

        return
    }

    for (let i=0;i<3;i++) {
        playerButtons[i].style.opacity = "60%";
        computerButtons[i].style.opacity = "50%";
    }

    currRound++;

    switchPage(".roundResult", ".game");

    roundNumberTexts[0].innerHTML = "ROUND " + currRound;
    roundNumberTexts[1].innerHTML = "ROUND " + currRound;
}