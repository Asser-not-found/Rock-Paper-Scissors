let userScore = 0;
let computerScore = 0;
let userHand;
let computerHand;
let roundResult;

const USER_OUTPUT = document.getElementById("user-scored");
const COMPUTER_OUTPUT = document.getElementById("computer-scored");

const ROCK = document.getElementById("rock");
const PAPER = document.getElementById("paper");
const SCISSORS = document.getElementById("scissors");

const RESULT = document.getElementById("result");
const SCORE_BOARD = document.getElementById("score-board");

function changeColor() {
    if (roundResult === "You Win!") {
        SCORE_BOARD.style.backgroundColor = "#008000";
    } else if (roundResult === "You Lose!") {
        SCORE_BOARD.style.backgroundColor = "#FF0000";
    } else {
        SCORE_BOARD.style.backgroundColor = "#4169E1";
    }
}

function calculateResult() {
    if (
        (userHand === "Rock" && computerHand === "Scissors") ||
        (userHand === "Paper" && computerHand === "Rock") ||
        (userHand === "Scissors" && computerHand === "Paper")
    ) {
        userScore++;
        USER_OUTPUT.innerHTML = userScore
        RESULT.innerHTML =
          userHand +
          "<sup>(user)</sup> Beats" +
          computerHand +
          "<sup>(computer)</sup>";
          roundResult = "You Win!"
    } else if (
        (computerHand === "Rock" && userHand === "Scissors") ||
        (computerHand === "Paper" && computerHand === "Rock") ||
        (computerHand === "Scissors" && computerHand === "Rock")
    ) {
        computerScore++;
        COMPUTER_OUTPUT.innerHTML = computerScore
        RESULT.innerHTML =
          userHand +
          "<sup>(user)</sup> Beats" +
          computerHand +
          "<sup>(computer)</sup>";
          roundResult = "You Lose!"
    }
}

function computerChoice() {
    let randomNumber = Math.floor(Math.random() * 3); // 0,1,2
    if (randomNumber === 0) {
      computerHand = "Rock";
    } else if (randomNumber === 1) {
      computerHand = "Paper";
    } else {
      computerHand = "Scissors";
    }
}

ROCK.addEventListener("click", () => {
    computerChoice();
    userHand = "Rock";
    calculateResult();
    changeColor();
});

PAPER.addEventListener("click", () => {
    computerChoice();
    userHand = "Paper";
    calculateResult();
    changeColor();
});

SCISSORS.addEventListener("click", () => {
    computerChoice();
    userHand = "Scissors";
    calculateResult();
    changeColor();
});
