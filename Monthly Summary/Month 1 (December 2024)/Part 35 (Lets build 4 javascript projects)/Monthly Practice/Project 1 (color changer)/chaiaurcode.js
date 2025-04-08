// const buttons = document.querySelectorAll('span');
// buttons.forEach(function (button) {
//     button.addEventListener('click', function (e) {
//         document.body.style.backgroundColor = e.target.id;
//     })
// })


// The whole code in one line
const buttons = document.querySelectorAll('span'); buttons.forEach(function (button) {button.addEventListener('click', function (e) {document.body.style.backgroundColor = e.target.id})})