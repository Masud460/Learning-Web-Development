const userInput = document.getElementById('username');
const btn = document.getElementById('btn');
const set_username = document.getElementById("set_username");;

if (!localStorage.getItem('name')) {
    localStorage.setItem('name', 'Masud')
}

btn.addEventListener('click', () => {
    const collectedUsername = userInput.value;
    localStorage.setItem("name", collectedUsername);
    location.reload()
})

window.addEventListener('load', () => {
    const name = localStorage.getItem('name');
    set_username.innerText = set_username.innerText + ' ' + name;
})
