// to get the three selection buttons

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

/* This version of the Rock, Paper, and Scissors Game will only work in the console */

/*
// userScore keeps track the points the player received
let userScore = 0;

// computerScore keeps track the points the computer received
let computerScore = 0;

// a list of choices that computer can choose from
const choices = ['rock', 'paper', 'scissors'];

// userPlay() function will ask the user to enter their choice
function userPlay() {
  // Ask the user to enter their choice (This is a global variable)
  userChoice = prompt('Rock, paper, or scissors?').toLowerCase();

  // check the input
  // if the input is one of the choice in the choices list, then continue
  if (choices.includes(userChoice)) {
    // print the player's choice in console
    console.log(`You chose ${userChoice}`);

    // call the computerPlay() function (computer's turn to choose their choice)
    computerPlay();

    // call the checkResult() function (check the result of the game)
    checkResult();

    // if the input is not one of the choice in the choice list
  } else {
    // alert the user to enter the correct choice
    alert('Please enter a valid choice.');

    // and recall the userPlay() function (user will able to replay the game)
    userPlay();
  }
}

// computerPlay() function will let computer randomly choose from the choices list
function computerPlay() {
  // computerChoice will store computer's choice to compete with computer (This is a global variable)
  computerChoice = choices[Math.floor(Math.random() * choices.length)];

  // print the computer's choice in console
  console.log(`Computer chose ${computerChoice}`);
}

// scoreboard() function will check the score and get the corresponding feedback
function scoreboard() {
  // if the player gets 5 points first
  if (userScore >= 5) {
    // print player wins the game with their score
    console.log(`You win with ${userScore} points`);
    // if the computer gets 5 points first
  } else if (computerScore >= 5) {
    // print computer wins the game with their score
    console.log(`Computer win with ${computerScore} points`);
    // if both did not get 5 points
  } else {
    // recall the userPlay() function to play another around until one of them gets 5 points
    userPlay();
  }
}

// checkResult() function will compare the user's choice and computer's choice
function checkResult() {
  // first to check if they both have the same choice
  if (userChoice === computerChoice) {
    // if so, print the corresponding feedback
    console.log("It's a tie!");
    // and also print their current points already received
    console.log(`Your score: ${userScore} vs. Computer's score: ${computerScore}`);
    // call the scoreboard() function to check the points
    scoreboard();
    // if the user's choice is rock and computer's choice is scissors
  } else if (userChoice === 'rock' && computerChoice === 'scissors') {
    // then the user wins
    console.log('You win!');
    // add 1 point to the user
    userScore++;
    // and also print their current points already received
    console.log(`Your score: ${userScore} vs. Computer's score: ${computerScore}`);
    // call the scoreboard() function to check the points
    scoreboard();
    // if the user's choice is rock and computer's choice is paper
  } else if (userChoice === 'rock' && computerChoice === 'paper') {
    // then the computer wins
    console.log('Computer win!');
    // add 1 point to the computer
    computerScore++;
    // and also print their current points already received
    console.log(`Your score: ${userScore} vs. Computer's score: ${computerScore}`);
    // call the scoreboard() function to check the points
    scoreboard();
    // if the user's choice is paper and computer's choice is rock
  } else if (userChoice === 'paper' && computerChoice === 'rock') {
    // then the user wins
    console.log('You win!');
    // add 1 point to the user
    userScore++;
    // and also print their current points already received
    console.log(`Your score: ${userScore} vs. Computer's score: ${computerScore}`);
    // call the scoreboard() function to check the points
    scoreboard();
    // if the user's choice is paper and computer's choice is scissors
  } else if (userChoice === 'paper' && computerChoice === 'scissors') {
    // then the computer wins
    console.log('Computer win!');
    // add 1 point to the computer
    computerScore += 1;
    // and also print their current points already received
    console.log(`Your score: ${userScore} vs. Computer's score: ${computerScore}`);
    // call the scoreboard() function to check the points
    scoreboard();
    // if the user's choice is scissors and computer's choice is paper
  } else if (userChoice === 'scissors' && computerChoice === 'paper') {
    // then the user wins
    console.log('You win!');
    // add 1 point to the user
    userScore++;
    // and also print their current points already received
    console.log(`Your score: ${userScore} vs. Computer's score: ${computerScore}`);
    // call the scoreboard() function to check the points
    scoreboard();
    // if the user's choice is scissors and computer's choice is rock
  } else if (userChoice === 'scissors' && computerChoice === 'rock') {
    // then the computer wins
    console.log('Computer win!');
    // add 1 point to the computer
    computerScore++;
    // and also print their current points already received
    console.log(`Your score: ${userScore} vs. Computer's score: ${computerScore}`);
    // call the scoreboard() function to check the points
    scoreboard();
  }
}

// call the userPlay() function to start the game
userPlay();
*/

/* This version follows The Odin Project Instructions, but also simpler */

// keep track of the score the player received
let playerScore = 0;
// keep track of the score the computer received
let computerScore = 0;

function userPlay() {
  rock.addEventListener('click', () => {
    return 'rock';
  });
  paper.addEventListener('click', () => {
    return 'paper';
  });
  scissors.addEventListener('click', () => {
    return 'scissors';
  });
}

// computerPlay() function will let computer randomly choose from the choices list
function computerPlay() {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * choices.length)];
}

// playRound() function will compare the player's choice against the computer's choice, and give the corresponding feedback
function playRound(playerSelection, computerSelection) {
  // if the player's choice is the same as the computer's choice
  if (playerSelection === computerSelection) {
    // print the feedback and current score of both the player and computer to thr console
    console.log(`It's a tie! Current Score:
    Player: ${playerScore}
    Computer: ${computerScore}`);
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    // add 1 point to the player
    playerScore++;
    // print the feedback and current score of both the player and computer to thr console
    console.log(`You win! Current Score:
    Player: ${playerScore}
    Computer: ${computerScore}`);
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    // add 1 point to the computer
    computerScore++;
    // print the feedback and current score of both the player and computer to thr console
    console.log(`Computer win! Current Score:
    Player: ${playerScore}
    Computer: ${computerScore}`);
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    // add 1 point to the player
    playerScore++;
    // print the feedback and current score of both the player and computer to thr console
    console.log(`You win! Current Score:
    Player: ${playerScore}
    Computer: ${computerScore}`);
  } else if (playerSelection === 'paper' && computerSelection === `scissors`) {
    // add 1 point to the computer
    computerScore++;
    // print the feedback and current score of both the player and computer to thr console
    console.log(`Computer win! Current Score:
    Player: ${playerScore}
    Computer: ${computerScore}`);
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    // add 1 point to the player
    playerScore++;
    // print the feedback and current score of both the player and computer to thr console
    console.log(`You win! Current Score:
    Player: ${playerScore}
    Computer: ${computerScore}`);
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    // add 1 point to the computer
    computerScore++;
    // print the feedback and current score of both the player and computer to thr console
    console.log(`Computer win! Current Score:
    Player: ${playerScore}
    Computer: ${computerScore}`);
  } else {
    // if the player's choice is not in the choices list, it will not compare properly and will print the following message.
    console.log('Invalid input');
  }
}

// game() function will process the game
function game() {
  const playerChoice = userPlay();
  // let the player pick their choice
  // const playerChoice = prompt('Pick one of the following: Rock, Paper, Scissors?').toLowerCase();
  // print the player's choice to the console
  console.log(`Player choose ${playerChoice}`);
  // call the computerPlay() function to let computer pick their choice
  const computerChoice = computerPlay();
  // print the computer's choice to the console
  console.log(`Computer choose ${computerChoice}`);
  // call the playRound() function to compare the player's choice against the computer's choice, provide the 2 parameters
  playRound(playerChoice, computerChoice);

  // Using the ternary operator to determine who win the game
  const finalResult =
    playerScore > computerScore
      ? 'You win! Congratulations!'
      : 'Computer wins! Better luck next time!';
  // print the result of the game to the console
  console.log(finalResult);
}

// call the game() function to start the game
game();
