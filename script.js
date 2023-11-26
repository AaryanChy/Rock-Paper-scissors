const computerOpt = ["Rock", "Paper", "Scissor"];

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  console.log(computerOpt[randomNumber].toLowerCase());
  return computerOpt[randomNumber].toLowerCase();
}

let computerSelection = getComputerChoice();

function gamePlay(playerSelection, computerSelection) {
  console.log(playerSelection, computerSelection);

  if (playerSelection === "rock" && computerSelection === "paper") {
    console.log("You Lose! Paper beats Rock");
  } else if (playerSelection === "rock" && computerSelection === "scissor") {
    console.log("You Win! Rock crushes Scissors");
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    console.log("You Win! Paper beats Rock");
  } else if (playerSelection === "paper" && computerSelection === "scissor") {
    console.log("You lose! scissor cuts paper");
  } else if (playerSelection === "scissor" && computerSelection === "rock") {
    console.log("You Lose! rock is broken by scissor");
  } else if (playerSelection === "scissor" && computerSelection === "paper") {
    console.log("You Win! scissor cuts paper");
  } else if (playerSelection !== "rock" || "scissor" || "paper") {
    console.log(
      "Invalid Input! Please enter either 'rock', 'scissor' or 'paper' only."
    );
  } else {
    console.log("It's a tie");
  }
}
let playerSelection;
function game() {
  playerSelection = prompt(
    "Enter your choice: rock/paper/scissors"
  ).toLowerCase();
  gamePlay(playerSelection, computerSelection);
}

game();
