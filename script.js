const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const compDisplay = document.getElementById("compDisplay");
const resultDisplay = document.getElementById("result");
const buttons = document.querySelectorAll(".choices button");

function playgame(playerChoice) {
  const compChoice = choices[Math.floor(Math.random() * 3)];
  let result = "";

  if (playerChoice === compChoice) {
    result = "It's a TIE!!!";
  } else {
    switch (playerChoice) {
      case "rock":
        result = compChoice === "scissors" ? "YOU WIN! 😁" : "YOU LOSE! 😭";
        break;
      case "paper":
        result = compChoice === "rock" ? "YOU WIN! 😁" : "YOU LOSE! 😭";
        break;
      case "scissors":
        result = compChoice === "paper" ? "YOU WIN! 😁" : "YOU LOSE! 😭";
        break;
    }
  }

  playerDisplay.textContent = `PLAYER: ${playerChoice}`;
  compDisplay.textContent = `COMPUTER: ${compChoice}`;
  resultDisplay.textContent = result;
}

buttons.forEach(button => {
  button.addEventListener("mouseover", () => {
    button.classList.add("hover");
  });

  button.addEventListener("mouseout", () => {
    button.classList.remove("hover");
  });

  button.addEventListener("click", () => {
    buttons.forEach(btn => btn.classList.remove("hover"));
    button.classList.add("hover");
  });
});
