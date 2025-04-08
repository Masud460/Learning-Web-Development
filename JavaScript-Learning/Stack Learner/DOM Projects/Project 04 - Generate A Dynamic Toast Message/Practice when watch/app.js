/**
 * Project requierments
 * - Change the background color by generating rgb color  by clicking a button
 * - Also display the HEX code to a disabled input field
 * - Add a button to copy the color code
 */

// Globals
let div = null;

// Step 1 - create onload handler
window.onload = () => {
  main();
};

function main() {
  const root = document.getElementById("root");
  const changeBtn = document.getElementById("change-btn");
  const copyBtn = document.getElementById('copy-btn');
  const output = document.getElementById("output");

  changeBtn.addEventListener("click", function () {
    const colorHEX = generateHEXColor();
    root.style.backgroundColor = colorHEX;
    output.value = colorHEX;
  });
  copyBtn.addEventListener('click', function () {
    window.navigator.clipboard.writeText(output.value);
    if (div != null) {
      div.remove()
    }
    displayToastMessage(output.value);
  })
}

// Step 2 - generate Hexadecimal color

function generateHEXColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`.toUpperCase();
}

// function generateHEXColor() {
//     let color = '#';
//     let hex = '0123456789ABCDEF';
//     for (let i = 0; i < 6; i++){
//         color += hex[Math.floor(Math.random() * 16)]
//     }
//     return color;
// }

function displayToastMessage(msg) {
  div = document.createElement('div');
  div.innerText = msg + ' copied';
  div.className = 'toast-message toast-message-slide-in';

  div.addEventListener('click', function () {
    div.classList.remove('toast-message-slide-in');
    div.classList.add('toast-message-slide-out')
    div.addEventListener('animationend', function () {
      this.remove()
    })
  })


  document.body.appendChild(div);
}

// Step 3 - collect all necessary references

// Step 4 - handle the change button click event

// Step 5 - handle the copy button click event
