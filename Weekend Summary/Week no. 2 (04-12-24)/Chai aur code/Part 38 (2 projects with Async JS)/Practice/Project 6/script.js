const start = document.getElementById("start");
const stop = document.getElementById("stop");

let randomColor = function () {
  let hex = "123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};


let intervalId;
const startChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBGColor, 1000);
  }

  function changeBGColor() {
    document.body.style.backgroundColor = randomColor();
  }
};
const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

start.addEventListener("click", startChangingColor);
stop.addEventListener("click", stopChangingColor);
