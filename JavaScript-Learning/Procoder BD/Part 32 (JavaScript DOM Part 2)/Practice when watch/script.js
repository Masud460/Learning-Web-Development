// Add text inside tags

let headTitle = document.querySelector("h1");
headTitle.innerText = headTitle.innerText + " Ataullah!";

// Change text

let boxes = document.querySelectorAll(".box");
let newNum = 1;

for (box of boxes) {
  box.innerText = `Box No.${newNum}`;
  newNum++;
}

// Create Element
let learnBtn = document.createElement("button");
learnBtn.innerText = "Learn More";

// let heroArea = document.querySelector(".hero");
// heroArea.append(learnBtn); // Last
// heroArea.prepend(learnBtn); // First
// heroArea.before(learnBtn); // Up to the element
// heroArea.after(learnBtn); // Under the Element

// Add Element
// function addFruits(name) {
//   const li = document.createElement('li');
//   li.innerHTML = `${name}`;
//   document.querySelector('ul').appendChild(li)
// }
// addFruits('Apple');
// addFruits('Grape');
// addFruits('Orange');

// Optimized
function addFruitsOP(name) {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(name));
  document.querySelector("ul").appendChild(li);
}
addFruitsOP("Apple");
addFruitsOP("Grape");
addFruitsOP("Orange");

// Edit
let editFruits = document.querySelector("li:first-child");
editFruits.innerText = "Blueberry";
editFruits.textContent = "Blueberrys";

const newFruits = document.createElement("li");
newFruits.textContent = "Strawberry";
editFruits.replaceWith(newFruits);

// Edit with tag
const editTag = document.querySelector("li:last-child");
// editTag.outerHTML = '<p>Jack-fruit</p>'

// Remove
let selUl = document.querySelector("ul");
let lastFruit = document.createElement("li");
lastFruit.innerText = "Watermelon";
selUl.appendChild(lastFruit);

// Main Remove
let selLastFruit = document.querySelector("li:last-child");
selLastFruit.remove()