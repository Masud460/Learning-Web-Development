// let users = ["Alice", "Bob", "Charlie", "David"];
// let search = "A";
// let result = users.filter(user => user.startsWith(search));
// console.log(result); // ["Alice"]

// All necessary references
const form = document.querySelector("form");
const addBtn = document.getElementById("add-fruit");
const searchBtn = document.getElementById("search-btn");
const userInput = document.getElementById("userInput");
const searchBox = document.getElementById("search");

// Storage
let fruits = [];

// Form default beheviour change
form.addEventListener("click", function (e) {
  e.preventDefault();
});

// Add user fruit
addBtn.addEventListener("click", function () {
  fruits.push(userInput.value);
  userInput.value = "";
});

// Search fruits
searchBtn.addEventListener("click", function () {
  let userWantedFruit = fruits.filter((fruit) =>
    fruit.startsWith(searchBox.value)
  );
  // searchBox.setAttribute('disabled', '')
  searchBox.value = userWantedFruit;
});
