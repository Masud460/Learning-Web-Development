// Steps

// Step 1: create onload handler
window.onload = () => {
  main();
};

function main() {
  const root = document.getElementById("root");
  const btn = document.getElementById("btn");
  btn.addEventListener("click", function () {
    const colorRGB = generateRGBColor();
    root.style.backgroundColor = colorRGB;
  });
}

// Step 2: Generate Random RGB Color
function generateRGBColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `rgb(${red}, ${green}, ${blue})`
}

// Step 3: Collect all nessecery item

// Step 4: Handle the click event
