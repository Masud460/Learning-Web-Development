// My try
/*
const guessField = document.getElementById('guessField');
const submit = document.getElementById('subt');
const previousGuesses = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHi');
const form = document.querySelector('form');
let randomNumber = Math.floor(Math.random() * 100) + 1;

let attempt = 0;
let remainingGuess = 10;
submit.addEventListener('click', function () {
  let preGuess = [];
  console.log(preGuess);
  attempt++
  if (
    guessField.value === '' ||
    guessField.value < 0 ||
    isNaN(guessField.value)
    ) {
      lowOrHigh.innerHTML = 'Please give a valid number';
      preGuess.push(guessField.value);
    } else if (guessField.value == randomNumber) {
      lowOrHigh.innerHTML = `Congratulation! you guessed the number in ${attempt} attempts`;
      preGuess.push(guessField.value);
      
    } else {
      if (guessField.value < randomNumber) {
        lowOrHigh.innerHTML = 'Too low';
      } else {
        lowOrHigh.innerHTML = 'Too high';
      }
      preGuess.push(guessField.value);
    }
    for (let i = 0; i < preGuess.length; i++){
      previousGuesses.textContent = preGuess[i]
  }
  --remainingGuess;
  remaining.innerHTML = remainingGuess;
})


form.addEventListener('click', function (e) {
  e.preventDefault();
});
*/

// Chai aur code method
/*
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1) {
    alert("Please enter a number more than 0");
  } else if (guess > 100) {
    alert("Please enter a number less than 100");
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. the number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage("You guessed it right");
    endGame();
  } else if (guess < randomNumber) {
    displayMessage("Number is tooo low");
  } else {
    displayMessage("Number is tooo high");
  }
}

function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start new game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    remaining.innerHTML = `${11 - numGuess}`;
    guessSlot.innerHTML = "";
    lowOrHi.innerHTML = ``;
    startOver.removeChild(p);
    userInput.removeAttribute("disabled");
    playGame = true;
  });
}
*/

// Try myself after watching chai aur code method

let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const startOver = document.querySelector(".resultParas");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const p = document.createElement('p')

let prevGuess = [];
let attempt = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number')
  } else if (guess < 1) {
    alert('Please enter a number more than 0')
  } else if (guess > 100) {
    alert('Please enter a number less than 100')
  } else {
    prevGuess.push(guess)
    if (attempt === 10) {
      resetEveryAttempt(guess)
      displayMessage(`Game Over. the number was ${randomNumber}`)
      endGame()
    } else {
      resetEveryAttempt(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage('You guessed it right')
    endGame()
  } else if (guess < randomNumber){
    displayMessage('Number is tooo low')
  } else {
    displayMessage('Number is tooo high')
  }
}

function resetEveryAttempt(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `
  remaining.innerHTML = `${10 - attempt}`;
  attempt++;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '')
  p.classList.add('button')
  p.innerHTML = `<h2 id="newGame">Start new game</h2>`
  startOver.appendChild(p)
  playGame = false;
  newGame()
}

function newGame() {
  const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    attempt = 1;
    remaining.innerHTML = `${11 - attempt}`
    guessSlot.innerHTML = [];
    lowOrHi.innerHTML = '';
    playGame = true
  })
}
