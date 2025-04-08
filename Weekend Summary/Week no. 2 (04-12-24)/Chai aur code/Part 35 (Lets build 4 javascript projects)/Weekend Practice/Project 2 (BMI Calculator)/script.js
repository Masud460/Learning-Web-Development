const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const result = document.getElementById("results");
    
    
  if (height < 0 || height == "" || isNaN(height)) {
    result.innerHTML = "Please give a valid height";
  } else if (weight < 0 || weight == "" || isNaN(weight)) {
    result.innerHTML = "Please give a valid weight";
  } else {
    let bmi = (weight / ((height * height) / 10000)).toFixed(2);
      result.innerHTML = bmi;
      const h1 = document.createElement('h1')
      if (bmi < 18.6) {
          h1.innerHTML = 'You are under weight'
          result.appendChild(h1)
      } else if (bmi < 24.9) {
          h1.innerHTML = 'You are normal weight'
          result.appendChild(h1)
      } else {
          h1.innerHTML = 'You are over weight'
          result.appendChild(h1)
      }
  }
});
