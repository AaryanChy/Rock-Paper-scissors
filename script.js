const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorBtn = document.querySelector(".scissor");
const reset = document.querySelector(".reset");
const div = document.querySelector(".gameResult");
const result = document.createElement("p");
const score = document.createElement("h1");
const opponentScore = document.createElement("h1");
const computerOpt = ["Rock", "Paper", "Scissor"];
let computerSelection;
let playerScore = 0;
let compScore = 0;
rockBtn.addEventListener("click", () => {
  const rock = rockBtn.value;
  console.log(rockBtn.value);
  computerSelection = getComputerChoice();

  gamePlay(rock.toLowerCase(), computerSelection);
});
paperBtn.addEventListener("click", () => {
  const paper = paperBtn.value;
  console.log(paperBtn.value);
  computerSelection = getComputerChoice();
  gamePlay(paper.toLowerCase(), computerSelection);
});
scissorBtn.addEventListener("click", () => {
  const scissor = scissorBtn.value;
  console.log(scissorBtn.value);
  computerSelection = getComputerChoice();
  gamePlay(scissor.toLowerCase(), computerSelection);
});
function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  console.log(computerOpt[randomNumber].toLowerCase());
  return computerOpt[randomNumber].toLowerCase();
}

function gamePlay(playerSelection, computerSelection) {
  console.log(playerSelection, computerSelection);

  if (playerSelection === "rock" && computerSelection === "paper") {
    result.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
    compScore++;
    div.appendChild(result);
  } else if (playerSelection === "rock" && computerSelection === "scissor") {
    result.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
    playerScore++;
    div.appendChild(result);
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    result.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
    playerScore++;
    div.appendChild(result);
  } else if (playerSelection === "paper" && computerSelection === "scissor") {
    result.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
    compScore++;
    div.appendChild(result);
  } else if (playerSelection === "scissor" && computerSelection === "rock") {
    result.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
    compScore++;
    div.appendChild(result);
  } else if (playerSelection === "scissor" && computerSelection === "paper") {
    result.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
    playerScore++;
    div.appendChild(result);
  } else {
    result.textContent = `It's a Tie`;
    div.appendChild(result);
  }
  score.textContent = `Your Total score : ${playerScore}`;
  opponentScore.textContent = `Computer total Score: ${compScore}`;
  div.appendChild(score);
  div.appendChild(opponentScore);
}
reset.addEventListener("click", () => {
  result.textContent = ``;
  playerScore = 0;
  compScore = 0;
  score.textContent = `Your Total score : ${playerScore}`;
  opponentScore.textContent = `Computer total Score: ${compScore}`;
});
