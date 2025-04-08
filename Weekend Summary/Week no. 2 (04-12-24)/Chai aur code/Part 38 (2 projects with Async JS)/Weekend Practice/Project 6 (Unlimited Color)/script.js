const start = document.querySelector("#start");
const stop = document.querySelector("#stop");

let randomColor = function () {
    let hex = '123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
}

let intervalId;

const startChangingColor = function () {
    if (!intervalId) {
        intervalId = setInterval(changeColor, 1000)
    }
    function changeColor() {
        document.body.style.backgroundColor = randomColor();
        console.log(randomColor());
    }
}

const stopChangingColor = function () {
    clearInterval(intervalId);
    intervalId = null;
}

start.addEventListener('click', startChangingColor, false)
stop.addEventListener('click', stopChangingColor, false)