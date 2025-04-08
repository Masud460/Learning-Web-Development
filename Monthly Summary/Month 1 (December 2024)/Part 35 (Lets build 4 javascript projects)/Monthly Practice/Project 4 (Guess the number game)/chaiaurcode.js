const form = document.querySelector('form')
const guesses = document.querySelector('.guesses');
const remainnigGuess = document.querySelector('.lastResult')
const alert = document.querySelector('.lowOrHi')
const userInput = document.querySelector('#guessField')

let randomNumber = Math.floor(Math.random() * 100) + 1;
let playGame = true;
if (playGame) {
    form.addEventListener('submit', function (e) {
        e.preventDefault()
        let guess = parseFloat(userInput.value);
        console.log(guess)
        console.log(randomNumber)
        checkTheNumber(guess)
    })
}

// let prevGuess = [];
let remaining = 0;

function checkTheNumber(guess) {
    if (guess < 0) {
        displayMessage('Please give a number more than 0')
    } else if (guess > 100) {
        displayMessage('Please give a number less than 100')
    } else if (isNaN(guess)) {
        displayMessage('Please give a valid number')
    } else {
        prevGuess.push(guess)
        checkValidation(guess)
    }
}

function checkValidation(guess) {
    if (guess === randomNumber) {
        displayMessage('You guessed it right')
        endGame()
    } else if (remaining === 10) {
        endGame()
        displayMessage(`You have used your chances, but the number was ${randomNumber}`)
    } else if (guess < randomNumber) {
        displayMessage('Number is too Low')
        nextChance(guess)
    } else {
        displayMessage('Number is too High')
        nextChance(guess)
    }
    guesses.innerHTML += `${guess}, `
}

function displayMessage(message) {
    alert.innerHTML = `<h3>${message}</h3>`
}

function nextChance(guess) {
    userInput.value = '';
    remainnigGuess.innerHTML = `${10 - remaining}`;
    remaining++;
}

function endGame(guess) {
    userInput.setAttribute('disabled', '')
    userInput.value = ''
    remainnigGuess.innerHTML = 0;
    guesses.innerHTML = [];
    playGame = false;
}

function startGame() {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
}