const rock = document.getElementById('rock');
const scissors = document.getElementById('scissors');
const paper = document.getElementById('paper');
const choiceMessage = document.getElementById('choiceMessage');
const winnerMessage = document.getElementById('winnerMessage');
const playAgain = document.getElementById('playAgain');

const choice = ['rock', 'scissors', 'paper'];

rock.addEventListener('click', () => {
  let computerChoice = choice[Math.floor(Math.random() * choice.length)];
  choiceMessage.textContent = `rock vs ${computerChoice}`;
  if (computerChoice === 'scissors') {
    winnerMessage.textContent = 'Player win';
    rock.setAttribute('disabled', true);
    scissors.setAttribute('disabled', true);
    paper.setAttribute('disabled', true);
    playAgain.removeAttribute('hidden');
  } else if (computerChoice === 'paper') {
    winnerMessage.textContent = 'Computer win';
    rock.setAttribute('disabled', true);
    scissors.setAttribute('disabled', true);
    paper.setAttribute('disabled', true);
    playAgain.removeAttribute('hidden');
  } else {
    winnerMessage.textContent = "It's a tie";
    rock.setAttribute('disabled', true);
    scissors.setAttribute('disabled', true);
    paper.setAttribute('disabled', true);
    playAgain.removeAttribute('hidden');
  }
});
scissors.addEventListener('click', () => {
  let computerChoice = choice[Math.floor(Math.random() * choice.length)];
  choiceMessage.textContent = `scissors vs ${computerChoice}`;
  if (computerChoice === 'paper') {
    winnerMessage.textContent = 'Player win';
    rock.setAttribute('disabled', true);
    scissors.setAttribute('disabled', true);
    paper.setAttribute('disabled', true);
    playAgain.removeAttribute('hidden');
  } else if (computerChoice === 'rock') {
    winnerMessage.textContent = 'Computer win';
    rock.setAttribute('disabled', true);
    scissors.setAttribute('disabled', true);
    paper.setAttribute('disabled', true);
    playAgain.removeAttribute('hidden');
  } else {
    winnerMessage.textContent = "It's a tie";
    rock.setAttribute('disabled', true);
    scissors.setAttribute('disabled', true);
    paper.setAttribute('disabled', true);
    playAgain.removeAttribute('hidden');
  }
});
paper.addEventListener('click', () => {
  let computerChoice = choice[Math.floor(Math.random() * choice.length)];
  choiceMessage.textContent = `paper vs ${computerChoice}`;
  if (computerChoice === 'rock') {
    winnerMessage.textContent = 'Player win';
    rock.setAttribute('disabled', true);
    scissors.setAttribute('disabled', true);
    paper.setAttribute('disabled', true);
    playAgain.removeAttribute('hidden');
  } else if (computerChoice === 'scissors') {
    winnerMessage.textContent = 'Computer win';
    rock.setAttribute('disabled', true);
    scissors.setAttribute('disabled', true);
    paper.setAttribute('disabled', true);
    playAgain.removeAttribute('hidden');
  } else {
    winnerMessage.textContent = "It's a tie";
    rock.setAttribute('disabled', true);
    scissors.setAttribute('disabled', true);
    paper.setAttribute('disabled', true);
    playAgain.removeAttribute('hidden');
  }
});

playAgain.addEventListener('click', () => {
  rock.removeAttribute('disabled');
  scissors.removeAttribute('disabled');
  paper.removeAttribute('disabled');
  playAgain.setAttribute('hidden', true);
  choiceMessage.textContent = '';
  winnerMessage.textContent = '';
});
