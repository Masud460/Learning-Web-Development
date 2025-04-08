function log(event) {
    if (display.innerHTML == '') {
        display.innerHTML = `You pressed ${event.key}`;
    } else {
        display.innerHTML = '';
        display.innerHTML = `You pressed ${event.key}`;
    }
}
const display = document.getElementById('area');
window.addEventListener('keydown', log)