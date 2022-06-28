const startGame = document.getElementById('start-game-btn');
const rock = document.getElementById('rock');
const scissors = document.getElementById('scissors');
const paper = document.getElementById('paper');
// const choiceMessage = document.getElementById('choiceMessage');
const winnerMessage = document.getElementById('winnerMessage');
const playAgain = document.querySelector('.playAgain');
const gameInstructions = document.querySelector('.game-direction');
const gameRules = document.querySelector('.game-rules');
const gameScreen = document.querySelector('.game-screen');
const playerChoiceOptions = document.querySelector('.player-choice');
const playerChoice = document.querySelector('.player-choice-screen');
const computerChoice = document.querySelector('.computer-choice-screen');
const choice = ['👊🏻', '✌🏻', '🖐🏻'];

startGame.addEventListener('click', () => {
  console.log('Game started');
  startGame.classList.add('hidden');
  gameInstructions.classList.add('hidden');
  gameScreen.classList.remove('hidden');
  // gameScreen.style.display = 'flex';
  gameRules.classList.remove('hidden');
  rock.classList.remove('hidden');
  paper.classList.remove('hidden');
  scissors.classList.remove('hidden');
  playerChoiceOptions.classList.remove('hidden');
});

rock.addEventListener('click', () => {
  playerChoice.textContent = '👊🏻';
  let computerChoose = choice[Math.floor(Math.random() * choice.length)];
  computerChoice.textContent = computerChoose;
  playerChoiceOptions.classList.add('hidden');
  playAgain.classList.remove('hidden');
  // choiceMessage.textContent = `rock vs ${computerChoose}`;
  if (computerChoose === '✌🏻') {
    winnerMessage.textContent = 'Player win';
    // rock.setAttribute('disabled', true);
    // scissors.setAttribute('disabled', true);
    // paper.setAttribute('disabled', true);
    playAgain.removeAttribute('hidden');
  } else if (computerChoose === '🖐🏻') {
    winnerMessage.textContent = 'Computer win';
    // rock.setAttribute('disabled', true);
    // scissors.setAttribute('disabled', true);
    // paper.setAttribute('disabled', true);
    playAgain.removeAttribute('hidden');
  } else {
    winnerMessage.textContent = "It's a tie";
    // rock.setAttribute('disabled', true);
    // scissors.setAttribute('disabled', true);
    // paper.setAttribute('disabled', true);
    playAgain.removeAttribute('hidden');
  }
});
scissors.addEventListener('click', () => {
  playerChoice.textContent = '✌🏻';
  let computerChoose = choice[Math.floor(Math.random() * choice.length)];
  computerChoice.textContent = computerChoose;
  playerChoiceOptions.classList.add('hidden');
  playAgain.classList.remove('hidden');
  // choiceMessage.textContent = `scissors vs ${computerChoose}`;
  if (computerChoose === '🖐🏻') {
    winnerMessage.textContent = 'Player win';
    // rock.setAttribute('disabled', true);
    // scissors.setAttribute('disabled', true);
    // paper.setAttribute('disabled', true);
    playAgain.removeAttribute('hidden');
  } else if (computerChoose === '👊🏻') {
    winnerMessage.textContent = 'Computer win';
    // rock.setAttribute('disabled', true);
    // scissors.setAttribute('disabled', true);
    // paper.setAttribute('disabled', true);
    playAgain.removeAttribute('hidden');
  } else {
    winnerMessage.textContent = "It's a tie";
    // rock.setAttribute('disabled', true);
    // scissors.setAttribute('disabled', true);
    // paper.setAttribute('disabled', true);
    playAgain.removeAttribute('hidden');
  }
});
paper.addEventListener('click', () => {
  playerChoice.textContent = '🖐🏻';
  let computerChoose = choice[Math.floor(Math.random() * choice.length)];
  computerChoice.textContent = computerChoose;
  playerChoiceOptions.classList.add('hidden');
  playAgain.classList.remove('hidden');
  // choiceMessage.textContent = `paper vs ${computerChoose}`;
  if (computerChoose === '👊🏻') {
    winnerMessage.textContent = 'Player win';
    // rock.setAttribute('disabled', true);
    // scissors.setAttribute('disabled', true);
    // paper.setAttribute('disabled', true);
    playAgain.removeAttribute('hidden');
  } else if (computerChoose === '✌🏻') {
    winnerMessage.textContent = 'Computer win';
    // rock.setAttribute('disabled', true);
    // scissors.setAttribute('disabled', true);
    // paper.setAttribute('disabled', true);
    playAgain.removeAttribute('hidden');
  } else {
    winnerMessage.textContent = "It's a tie";
    // rock.setAttribute('disabled', true);
    // scissors.setAttribute('disabled', true);
    // paper.setAttribute('disabled', true);
    playAgain.removeAttribute('hidden');
  }
});

playAgain.addEventListener('click', () => {
  gameRules.classList.add('hidden');
  gameInstructions.classList.remove('hidden');
  startGame.classList.remove('hidden');
  gameScreen.classList.add('hidden');
  winnerMessage.textContent = '';
  playAgain.classList.add('hidden');
  playerChoice.textContent = '';
  computerChoice.textContent = '';
});
