function localTime(){
    const clock = document.getElementById('clock')
    const time = new Date().toLocaleTimeString()
    clock.innerHTML = time
}

setInterval(localTime, 1000)