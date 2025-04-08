// const h1 = document.querySelector("h1");
// h1.innerText = 'Hi Masud';
// h1.innerText = h1.innerText + " Masud";

// Change text

// let boxes = document.querySelectorAll(".box");
// let newNum = 1;
// for (box of boxes) {
//     box.innerText = `Box No.${newNum}`;
//     newNum++;
// }

// Create Element
const heroArea = document.querySelector(".hero");
const button = document.createElement("button");
button.innerText = "Learn More";
heroArea.append(button);
// heroArea.prepend(button);
// heroArea.before(button);
// heroArea.after(button);

// Add Element
// function fruitsName(name) {
//     const li = document.createElement('li');
//     li.innerText = name;
//     document.querySelector('ul').appendChild(li)
// }
// fruitsName('Banana')
// fruitsName('Apple')
// fruitsName('Orange')

// Optimized Way
function fruitsNameOP(name) {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(name));
  document.querySelector("ul").appendChild(li);
}
fruitsNameOP("Banana");
fruitsNameOP("Apple");
fruitsNameOP("Orange");

// Edit element
const editLi = document.querySelector("li:first-child");
editLi.textContent = "Strawberry";
editLi.innerText = "Strawberrys";

const newFruit = document.createElement("li");
newFruit.innerText = "Blueberry";
editLi.replaceWith(newFruit);

let lastLi = document.querySelector("li:last-child");
lastLi.outerHTML = "<p>Jack-Fruit</p>";

// Remove
newFruit.remove();
