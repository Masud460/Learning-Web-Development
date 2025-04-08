let progress = 0;
const interval = setInterval(() => {
    progress += 10;
    console.log(`Loading... ${progress}%`);
    
    if (progress >= 100) {
        clearInterval(interval);
        console.log("Loading Complete!");
    }
}, 500);
