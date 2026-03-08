const keys = document.querySelectorAll('li');
const score = document.querySelector('.score');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus')
const multiply = document.querySelector('.multiply')
const divide = document.querySelector('.divide')
const equal = document.querySelector('.equal')

keys.forEach(function (value) {
    // console.log(value);
    value.addEventListener('click', function() {
        let numbers = parseFloat(value.innerHTML);
        score.innerHTML = `${numbers}`
        console.log(numbers);
    })
})
