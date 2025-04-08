const form = document.querySelector('form');


function debounce(fn, delay) {
    let timeoutId;
    return function (e) {
        e.preventDefault()
        if (timeoutId) {
            clearTimeout(timeoutId)
        }
        timeoutId = setTimeout(function () {
            fn()
        }, delay)
    }
}


form.addEventListener('submit', debounce(function () {
    console.log('Registered succecfully')
}, 500))