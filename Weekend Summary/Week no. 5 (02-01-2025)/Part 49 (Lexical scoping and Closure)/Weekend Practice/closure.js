// function outer() {
//     let name = 'Masud';
//     function displayName() {
//         console.log(name);
//     }
//     displayName()
// }
// outer()



// function makeFunc() {
//     let name = "Masud";
//     function displayName() {
//         console.log(name);
//     }
//     return displayName;
// }
// const myFunc = makeFunc()
// myFunc()

const orange = document.getElementById('orange');
const green = document.getElementById('green');

// orange.addEventListener('click', function () {
//     document.body.style.backgroundColor = 'orange'
// })
// green.addEventListener('click', function () {
//     document.body.style.backgroundColor = 'green'
// })

function changeColor(color) {
    return function addColor() {
        document.body.style.backgroundColor = color;
    }
}
orange.addEventListener('click', changeColor('orange'))
green.addEventListener('click', changeColor('green'))