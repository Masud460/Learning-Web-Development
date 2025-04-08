const height = document.querySelector("#height");
const weight = document.querySelector("#weight");
const button = document.querySelector("#button");
const form = document.querySelector("#form");
const result = document.querySelector(".result");
const score = document.getElementById("score");

button.addEventListener("click", function () {
  let newHeight = parseFloat(height.value / 100);
  let newWeight = parseFloat(weight.value);

  let squareHeight = newHeight * newHeight;

  let bmi = newWeight / squareHeight;
  score.textContent = bmi.toFixed(2);
  console.log();
  result.style.display = "block";

  if (score.textContent < 18.6) {
    score.style.background = "#ffeaa7";
  } else if (score.textContent < 24.9) {
    score.style.background = "#55efc4";
  } else {
    score.style.background = "#d63031";
  }
});

form.addEventListener("submit", function (event) {
  event.preventDefault();
});
