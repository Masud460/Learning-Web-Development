/**
 * Project requierments
 * - Change the background color by generating rgb color  by clicking a button
 * - also display the HEX code to a disabled input field
 */

// Step 1 - create onload handler
window.onload = () => {
    main()
}

function main() {
    const root = document.getElementById('root')
    const changeBtn = document.getElementById('change-btn')
    const output = document.getElementById('output');
    
    changeBtn.addEventListener('click', function () {
        const colorHEX = generateHEXColor();
        root.style.backgroundColor = colorHEX;
        output.value = colorHEX;
    })
    
}

// Step 2 - generate Hexadecimal color

function generateHEXColor() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
}

// function generateHEXColor() {
//     let color = '#';
//     let hex = '0123456789ABCDEF';
//     for (let i = 0; i < 6; i++){
//         color += hex[Math.floor(Math.random() * 16)]
//     }
//     return color;
// }


// Step 3 - collect all necessary references

// Step 4 - handle the click event