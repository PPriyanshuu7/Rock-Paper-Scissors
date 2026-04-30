const choices = ["rock", "paper", "scissors"];

let playerScore = 0;
let compScore = 0;

const buttons = document.querySelectorAll(".choices button");
const playerDisplay = document.getElementById("playerDisplay");
const compDisplay = document.getElementById("compDisplay");
const resultDisplay = document.getElementById("result");
const playerScoreDisplay = document.getElementById("playerScore");
const compScoreDisplay = document.getElementById("compScore");
const resetBtn = document.getElementById("resetBtn");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    playGame(button.dataset.choice);
  });
});

function playGame(playerChoice) {
  const compChoice = choices[Math.floor(Math.random() * 3)];

  playerDisplay.textContent = `You chose: ${playerChoice}`;
  compDisplay.textContent = `AI chose: ${compChoice}`;

  const result = getResult(playerChoice, compChoice);
  resultDisplay.textContent = result;

  resultDisplay.className = "";
  resultDisplay.classList.add(
    result.includes("Win") ? "win" :
    result.includes("Lose") ? "lose" : "tie"
  );

  updateScore(result);
}

function getResult(player, comp) {
  if (player === comp) return "It's a Tie 🤝";

  if (
    (player === "rock" && comp === "scissors") ||
    (player === "paper" && comp === "rock") ||
    (player === "scissors" && comp === "paper")
  ) {
    return "You Win 😎";
  }

  return "You Lose 😭";
}

function updateScore(result) {
  if (result.includes("Win")) playerScore++;
  else if (result.includes("Lose")) compScore++;

  playerScoreDisplay.textContent = playerScore;
  compScoreDisplay.textContent = compScore;
}

resetBtn.addEventListener("click", () => {
  playerScore = 0;
  compScore = 0;

  playerScoreDisplay.textContent = 0;
  compScoreDisplay.textContent = 0;

  resultDisplay.textContent = "Game Reset 🔄";
});
