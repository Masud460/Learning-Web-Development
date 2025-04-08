const btn = document.getElementById('order');
const text = document.getElementById('text');
let orderUnit = 1;

function debounce(fn, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer)
        timer = setTimeout(function () {
           fn(...args) 
        }, delay)
    }
}


btn.addEventListener('click', debounce(function () {
    text.innerHTML = `Order Placed! ${orderUnit}`;
    orderUnit++;
}, 1000))