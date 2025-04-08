const button = document.getElementById('btn');


function debounce(fn, delay) {
    let timeoutId;
    return function () {
        if (timeoutId) {
            clearTimeout(timeoutId)
        }
        timeoutId = setTimeout(function () {
            fn()
        }, delay)
    }
}

button.addEventListener('click', debounce(function (event) {
    console.log('Clicked')
}, 500))