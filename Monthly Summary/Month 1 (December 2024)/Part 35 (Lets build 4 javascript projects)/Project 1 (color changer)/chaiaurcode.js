const buttons = document.querySelectorAll('span');
const body = document.querySelector('body');


// First way
/*
buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target.id);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    } else {
      body.style.backgroundColor = e.target.id;
    }
  });
});
*/


// Second way
/*
buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        const color = e.target.id;
        body.style.backgroundColor = color;
    })
})
*/


// Third way
/*
buttons.forEach(button => {
    button.addEventListener('click', function () {
        const idList = button.id;
        body.style.backgroundColor = idList
        console.log(idList);
    })
})
*/


// Fourth way
buttons.forEach(function (value) {
    value.addEventListener('click', function () {
        let classList = this.classList.value;
        console.log(classList);
        let color = '';
        switch (classList) {
            case 'grey':
                color = 'grey';
                break;
            case 'white':
                color = 'white';
                break;
            case 'blue':
                color = 'blue';
                break;
            case 'yellow':
                color = 'yellow';
                break;
        }
        body.style.backgroundColor = color;
    })
})