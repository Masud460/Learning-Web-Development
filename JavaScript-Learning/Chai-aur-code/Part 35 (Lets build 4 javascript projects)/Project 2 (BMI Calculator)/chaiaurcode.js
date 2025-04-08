// First method
/*
const button = document.querySelector('button');
const height = document.getElementById('height');
const weight = document.getElementById('weight');
const result = document.getElementById('results');
const form = document.querySelector('form');

button.addEventListener('click', function () {
  let newHeight = height.value;
  let newWeight = weight.value;

  newHeight = newHeight / 100;
  let squareHeight = newHeight * newHeight;

  let bmi = newWeight / squareHeight;
  result.innerText = bmi.toFixed(2);
});

form.addEventListener('submit', function (e) {
  e.preventDefault();
});
*/


// Chai aur code method
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')

  if (height == '' || height < 0 || isNaN(height)) {
    results.innerHTML = 'Please give a valid height';
  } else if (weight == '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = 'Please give a valid weight';
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);



    if (bmi < 18.6) {
      results.innerHTML = `<h2>${parseFloat(bmi).toFixed(2)}</h2>` + `
      <h3>UnderWeight</h3>`;
    } else if (bmi < 24.9) {
      results.innerHTML = `<h2>${parseFloat(bmi)}</h2>` + `<h3>NormalWeight</h3>`;
    } else {
      results.innerHTML = `<h2>${parseFloat(bmi)}</h2>` + `<h3>OverWeight</h3>`;
    }
  }

  
})