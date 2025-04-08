// Steps

// Step 1: create onload handler
window.onload = () => {
  main();
};

function main() {
  const root = document.getElementById("root");
  const output = document.getElementById("output");
  const changeBtn = document.getElementById("change-btn");
  const copyBtn = document.getElementById("copy-btn");

  changeBtn.addEventListener("click", function () {
    const bgColor = generateHexColor();
    root.style.backgroundColor = bgColor;
    output.value = bgColor;
  });

  copyBtn.addEventListener('click', function() {
    navigator.clipboard.writeText(output.value)
  })
}

// Step 2: Generate Hex Color Code
function generateHexColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `#${red.toString(16)}${green.toString(16)}${blue.toString(
    16
  )}`.toUpperCase();
}

// Step 3: Collect all necessary item

// Step 4: Handle the change button click event

// Step 5: Handle the copy button click event