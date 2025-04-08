const btn = document.getElementById('order');
const text = document.getElementById('text');
let orderNo = 1;

function throttle(fn, delay) {
    let lastOrder = 0;

    return function (...args) {
        const now = Date.now();

        if (now - lastOrder < delay) {
            return;
        } else {
            lastOrder = now;
            return fn(...args)
        };
    }
}


btn.addEventListener('click', throttle(function () {
    text.innerHTML = `Order Placed! ${orderNo}`
    orderNo++;
}, 1000))