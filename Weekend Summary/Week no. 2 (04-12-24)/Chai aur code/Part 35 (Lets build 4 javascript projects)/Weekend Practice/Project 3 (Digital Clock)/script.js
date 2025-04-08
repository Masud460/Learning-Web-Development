function localTime() {
    let clock = new Date().toLocaleTimeString();
    const digitalClock = document.getElementById('clock');
    digitalClock.innerHTML = clock;
}
setInterval(localTime, 1000)