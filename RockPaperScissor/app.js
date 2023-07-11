const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');

let userChoice;
let computerChoice;
let result;

// Add click event listener to each button
possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id; // Get the user's choice from the clicked button
    userChoiceDisplay.innerHTML = userChoice; // Display the user's choice
    generateComputerChoice(); // Generate the computer's choice
    getResult(); // Calculate the result
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1; // Generate a random number between 1 and 3

  // Assign the computer's choice based on the random number
  if (randomNumber === 1) {
    computerChoice = 'rock';
  }
  if (randomNumber === 2) {
    computerChoice = 'scissors';
  }
  if (randomNumber === 3) {
    computerChoice = 'paper';
  }
  computerChoiceDisplay.innerHTML = computerChoice; // Display the computer's choice
}

function getResult() {
  if (computerChoice === userChoice) {
    result = 'its a draw!'; // If the choices are the same, it's a draw
  }
  if (computerChoice === 'rock' && userChoice === 'paper') {
    result = 'you win!'; // User wins if they choose paper and computer chooses rock
  }
  if (computerChoice === 'rock' && userChoice === 'scissors') {
    result = 'you lost!'; // User loses if they choose scissors and computer chooses rock
  }
  if (computerChoice === 'paper' && userChoice === 'scissors') {
    result = 'you win!'; // User wins if they choose scissors and computer chooses paper
  }
  if (computerChoice === 'paper' && userChoice === 'rock') {
    result = 'you lose!'; // User loses if they choose rock and computer chooses paper
  }
  if (computerChoice === 'scissors' && userChoice === 'rock') {
    result = 'you win!'; // User wins if they choose rock and computer chooses scissors
  }
  if (computerChoice === 'scissors' && userChoice === 'paper') {
    result = 'you lose!'; // User loses if they choose paper and computer chooses scissors
  }
  resultDisplay.innerHTML = result; // Display the result
}
