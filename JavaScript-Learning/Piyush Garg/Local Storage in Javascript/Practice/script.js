const set_username = document.getElementById('set_username');
const btn = document.getElementById('btn');
const username = document.getElementById('username');

if (!localStorage.getItem('name')) {
    localStorage.setItem('name', 'Masud')
}

btn.addEventListener('click', () => {
    const value = username.value;
    localStorage.setItem('name', value);
    location.reload()

})

window.addEventListener('load', () => {
    const value = localStorage.getItem('name');
    set_username.innerText = set_username.innerText + ' ' + value;
})