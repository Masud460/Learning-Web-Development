// References
const form = document.querySelector("form");
const addBtn = document.getElementById("add-fruit");
const searchBtn = document.getElementById("search-btn");
const userInput = document.getElementById("userInput");
const searchBox = document.getElementById("search");
const fruitList = document.getElementById("fruit-list");

// Storage
let fruits = [];

// Prevent form submission on button clicks
form.addEventListener("submit", function (e) {
  e.preventDefault();
});

// Add fruit to the list
addBtn.addEventListener("click", function (e) {
  e.preventDefault(); // Prevent default button behavior

  let fruitName = userInput.value.trim(); // Trim to remove extra spaces
  if (fruitName === "") {
    alert("Please enter a fruit name!"); // Prevent adding empty values
    return;
  }

  fruits.push(fruitName);
  userInput.value = ""; // Clear input after adding

  // Display updated fruit list
  fruitList.textContent = `Fruits: ${fruits.join(", ")}`;
});

// Search fruits
searchBtn.addEventListener("click", function (e) {
  e.preventDefault(); // Prevent default button behavior

  let searchQuery = searchBox.value.trim().toLowerCase(); // Ignore case sensitivity
  if (searchQuery === "") {
    alert("Please enter a search term!"); // Prevent searching with an empty input
    return;
  }

  let userWantedFruit = fruits.filter((fruit) =>
    fruit.toLowerCase().startsWith(searchQuery)
  );

  // Show result in an alert or a separate section
  if (userWantedFruit.length > 0) {
    alert(`Matching Fruits: ${userWantedFruit.join(", ")}`);
  } else {
    alert("No matching fruits found!");
  }

  searchBox.value = ""; // Clear search box after searching
});
