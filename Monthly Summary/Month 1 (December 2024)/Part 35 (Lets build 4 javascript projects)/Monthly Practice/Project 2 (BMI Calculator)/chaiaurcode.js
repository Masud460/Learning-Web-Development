const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    e.preventDefault()
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const result = document.querySelector('#results')
    
    const bmi = (weight / ((height * height) / 10000));
    result.innerHTML = bmi.toFixed(2)
})  