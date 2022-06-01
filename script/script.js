/* This version of the Rock, Paper, and Scissors Game will only work in the console */

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
