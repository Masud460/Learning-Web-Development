// Steps 

// Step 1: create onload handler
window.onload = () => {
  main();
}

function main() {
  const root = document.getElementById('root');
  const output = document.getElementById('output');
  const btn = document.getElementById('btn');

  btn.addEventListener('click', function() {
    const bgColor = generateHexColor();
    root.style.backgroundColor = bgColor;
    output.value = bgColor; 
  })
}

// Step 2: Generate Hex Color Code
function generateHexColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`.toUpperCase();
}

// Step 3: Collect all necessary item

// Step 4: Handle the click event