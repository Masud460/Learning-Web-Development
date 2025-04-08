// function outer() {
//     let name = 'Masud'
//     function displayName() {
//         console.log(name)
//         let age = 19;
//     }
//     // console.log(age)
//     displayName()
// }

// outer()


// function makeFunc() {
//     let name = 'Masud';
//     function displayName() {
//         console.log(name)
//     }
//     return displayName
// }
// const myFunc = makeFunc()
// myFunc()


function clickHandler(color) {
    return function () {
        document.body.style.backgroundColor = color;
    }
}
document.getElementById('green')
    .addEventListener('click', clickHandler('green'))

document.getElementById('yellow')
    .addEventListener('click', clickHandler('yellow'))