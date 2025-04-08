// lexical scope
function outer() {
    let username = 'Masud';
    function inner() {
        let secret = 'masud388';
        console.log('inner one', username)
    }
    function innerTwo() {
        console.log('inner two', username)
        // console.log(secret)
    }
    // console.log(secret)
    inner()
    innerTwo()
}
// outer()
// console.log(username)

// Closure
function myFunc() {
    let name = 'Masud';
    function displayName() {
        console.log(name)
    }
    return displayName;
}

const invoke = myFunc();
// invoke()


// Real world issue
const orange = document.getElementById('orange');
const red = document.getElementById('red');

function colorHandler(color) {
    // document.body.style.backgroundColor = color;
    return function () {
        document.body.style.backgroundColor = color;
    }
}

orange.addEventListener('click', colorHandler('orange'))
red.addEventListener('click', colorHandler('red'))