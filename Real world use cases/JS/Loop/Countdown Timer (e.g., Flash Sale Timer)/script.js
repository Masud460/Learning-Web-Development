let timeLeft = 10; // 10 seconds countdown
const display = document.querySelector('.message')
const countdown = setInterval(() => {
    display.innerHTML = `Sale ends in: ${timeLeft} seconds`;
    timeLeft--;

    if (timeLeft < 0) {
        clearInterval(countdown);
        display.textContent = "Sale ended!";
    }
}, 1000);
