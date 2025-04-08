// Steps

// Step 1: create onload handler
window.onload = () => {
    main();
}

function main() {
    const root = document.getElementById('root');
    const btn = document.getElementById('change-color');

    btn.addEventListener('click', function () {
        const colorRGB = generateRGBColor();
        root.style.backgroundColor = colorRGB;
    })
}

// Step 2: random RGB Color function
function generateRGBColor() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `rgb(${red}, ${green}, ${blue})`;
}

// Step 3: Get all neseccary item

// Step 4: Handle the click event