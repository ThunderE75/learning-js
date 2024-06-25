// Rock Paper Scissor

const choicesAvailable = ['Rock', 'Paper', 'Scissor'];
let rockBtn = document.getElementById("rock");
let paperBtn = document.getElementById("paper");
let scissorBtn = document.getElementById("scissor");

let playerChoice = document.getElementById("playerChoice");
let computerChoice = document.getElementById("computerChoice");

let resultDisplay = document.getElementById("result");

let playerScoreDisplay = document.getElementById("playerScore");
let computerScoreDisplay = document.getElementById("computerScore");

let playerScore = 0;
let computerScore = 0;

playerScoreDisplay.textContent = `Player Score: 0`
computerScoreDisplay.textContent = `Player Score: 0`


function playGame(choice) {
    let randChoice = choicesAvailable[Math.floor(Math.random() * 3)];
    let result = "";
    if (choice === randChoice) {
        result = "It's a Tie!"
    } else {
        switch (choice) {
            case "Rock":
                result = (randChoice === "Scissor") ? "You Win!" : "You Lose!";
                break;
            case "Paper":
                result = (randChoice === "Rock") ? "You Win!" : "You Lose!";
                break;
            case "Scissor":
                result = (randChoice === "Paper") ? "You Win!" : "You Lose!";
                break;
        }
    }
    playerChoice.textContent = `Player Choice : ${choice}`;
    computerChoice.textContent = `Computer Choice : ${randChoice}`;

    resultDisplay.textContent = result;
    resultDisplay.classList.remove("win", "lose", "tie");
    switch (result) {
        case "You Win!":
            resultDisplay.classList.add("win");
            playerScore += 1;
            playerScoreDisplay.textContent = `Player Score: ${playerScore}`
            break;
        case "You Lose!":
            resultDisplay.classList.add("lose");
            computerScore += 1;
            computerScoreDisplay.textContent = `Player Score: ${computerScore}`
            break;
        case "It's a Tie!":
            resultDisplay.classList.add("tie");
            break;
    }