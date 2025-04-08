const body = document.getElementById('body');
const button = document.querySelectorAll('li');

// const redColor = document.querySelector('.red');
// redColor.addEventListener('click', function () {
//     body.style.backgroundColor = '#ff7675'
// })

// const greenColor = document.querySelector('.green');
// greenColor.addEventListener('click', function () {
//     body.style.backgroundColor = '#55e5c4'
// })



// button.forEach(function (value) {
//     value.addEventListener('click', function () {
//         body.style.backgroundColor = '#ff7675';
//     })
// })


button.forEach(function (value) {
    value.addEventListener('click', function () {
        let className = this.classList.value;
        let color = '';
        switch (className) {
            case 'red':
                color = '#ff7675';
                break;
            case 'green':
                color = '#55e5c4';
                break;
            case 'blue':
                color = '#74b9ff';
                break;
            case 'pink':
                color = '#fd79a8';
                break;
            case 'purple':
                color = '#a29dfe';
                break;
            default:
                color = 'a29dfe';
                break;
        }
        body.style.backgroundColor = color;
        console.log(className);
        console.log(color);
    })
})