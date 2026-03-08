const form = document.querySelector('form');
const submit = document.getElementById('submit')


form.addEventListener('submit', formSubmit)
function formSubmit(e) {
    e.preventDefault();
    submit.type = 'button';
    submit.textContent = 'Ordred'
    
}

