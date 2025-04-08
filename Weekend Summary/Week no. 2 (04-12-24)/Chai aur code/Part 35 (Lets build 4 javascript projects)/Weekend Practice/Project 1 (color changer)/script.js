const buttons = document.querySelectorAll('span')

buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
        const color = e.target.id;
        document.body.style.backgroundColor = color;
    })
})