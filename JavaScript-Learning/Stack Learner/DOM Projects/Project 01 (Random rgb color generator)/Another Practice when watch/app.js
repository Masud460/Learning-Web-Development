/**
 * Project requierments
 * Change the background color by generating rgb color by clicking a button
 */

// Step 1 - create onload handler
window.onload = function(){
    main()
}

function main() {
    const root = document.getElementById('root');
    const changeBtn = document.getElementById('change-btn');

    changeBtn.addEventListener('click', function () {
        const colorRGB = randomRGBColor() // Defferent to my code!
        root.style.background = colorRGB;
    })
    
}

// step 2 - random color generator
function randomRGBColor() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `rgb(${red}, ${green}, ${blue})`
}

// step 3 - collect all necessary references

// step 4 - handle the click event