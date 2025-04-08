const body = document.getElementById("body");
const button = document.querySelectorAll("li");

// const redColor = document.querySelector(".red");
// redColor.addEventListener("click", function () {
//   body.style.backgroundColor = "#ff7675";
// });

// const greenColor = document.querySelector(".green");
// greenColor.addEventListener("click", function () {
//   body.style.backgroundColor = "#55e5c4";
// });

// const blueColor = document.querySelector(".blue");
// blueColor.addEventListener("click", function () {
//   body.style.backgroundColor = "#74b9ff";
// });

// const pinkColor = document.querySelector(".pink");
// pinkColor.addEventListener("click", function () {
//   body.style.backgroundColor = "#fd79a8";
// });


// button.forEach(function (value) {
//     value.addEventListener('click', function () {
//         body.style.backgroundColor = '#ff7675'
//     })
// })

button.forEach(function (value) {
    value.addEventListener('click', function () {
        let className = this.classList.value;
        let color = '';
        if (className === 'red') {
            color = '#ff7675';
        }
        if (className === 'green') {
            color = '#55e5c4'
        }
        if (className === 'blue') {
            color = '#74b9ff'
        }
        if (className === 'pink') {
            color = '#fd79a8'
        }
        if (className === 'purple') {
            color = '#a29dfe'
        }
        body.style.backgroundColor = color;
        // console.log(className);
        // console.log(color);
    })
})