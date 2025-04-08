let randomNumber = Math.floor(Math.random() * 100);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const startOver = document.querySelector(".resultParas");
const guessSlot = document.querySelector(".guesses");
const remainnig = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const p = document.createElement("p");
let prevGuess = [];
let attempt = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    let guess = parseFloat(userInput.value);

    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (guess < 1) {
    alert("Please give a number more than 0");
  } else if (isNaN(guess)) {
    alert("Please give a valid number");
  } else if (guess > 100) {
    alert("Please give a number less 100");
  } else {
    prevGuess.push(guess);
    if (attempt === 10) {
      displayGuess(guess);
      displayMessage(`Game Over! the number was ${randomNumber}`);
      endGame();
    } else {
      checkGuess(guess);
      displayGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess == randomNumber) {
    displayMessage("You guessed it right");
    endGame();
  } else if (guess > randomNumber) {
    displayMessage("Number is tooo high");
  } else {
    displayMessage("Number is tooo low");
  }
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h3>${message}</h3>`;
}

function displayGuess(guess) {
  userInput.value = "";
  guessSlot.textContent += `${guess}, `;
  attempt++;
  remainnig.innerHTML = `${11 - attempt}`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  remainnig.innerHTML = 0;
  playGame = false;
  p.innerHTML = `<h2 id='startGame'>Start New Game</h2>`;
  startOver.appendChild(p);
  newGame();
}

function newGame() {
  const btn = document.getElementById("startGame");
  btn.addEventListener("click", function () {
    randomNumber = Math.floor(Math.random() * 100);
    userInput.removeAttribute("disabled");
    attempt = 1;
    playGame = true;
    prevGuess = [];
    remainnig.innerHTML = `${11 - attempt}`;
    guessSlot.innerHTML = "";
    lowOrHi.innerHTML = "";
    startOver.removeChild(p)
  });
}
