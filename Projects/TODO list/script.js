// References

const container = document.querySelector(".container");
const body = document.body;

// Home screen elements
const head = document.querySelector(".head");
const searchNote = document.getElementById("search_note");
const select = document.querySelector("select");
let btnRemove;

// Add New Note
const addNote = document.querySelector(".add_btn");
const addArea = document.querySelector(".add_area");
const addNoteHead = document.getElementById("add_note_head");
const userNote = document.getElementById("usernote");
const apply = document.querySelector(".apply_btn");
const cancel = document.getElementById("cancel_btn");

// Checkbox
let checkboxText = document.querySelectorAll(".checkbox_text");

// Display blurring
const overlay = document.createElement("div");
overlay.classList.add("overlay");
body.appendChild(overlay);

// Show warning
const warning = document.getElementById("warn");

// Control Dark and White
let themeIcon = document.querySelector(".icon_white");

// Dark and White

// Add new note
addNote.addEventListener("click", function () {
  addArea.style.display = "flex";
  overlay.style.display = "block";
});

// Saving data on localStorage
function saveDataInLocal(userDetail) {
  const userNoteValue = userDetail;

  let key = "todo";
  if (localStorage.length == 0) {
    localStorage.setItem(`${key} ${1}`, userNoteValue);
  } else {
    localStorage.setItem(`${key} ${localStorage.length + 1}`, userNoteValue);
  }
}

// Reseting input field after using it
function resetInputField() {
  userNote.value = "";
  addArea.style.display = "none";
  overlay.style.display = "none";
}

// Add items to the todo area
function addTodo(todoText) {
  const label = document.createElement("label");
  const input = document.createElement("input");
  const span = document.createElement("span");
  const h3 = document.createElement("h3");
  const textColor =
    themeIcon.getAttribute("class") === "icon_white" ? "#000" : "#fff";
  h3.style.setProperty("--checkbox-color", textColor);

  // modification
  label.classList.add("square_checkbox");
  input.type = "checkbox";
  span.classList.add("checkbox");
  h3.innerHTML = todoText;
  h3.classList.add("checkbox_text");

  // add these in label
  label.appendChild(input);
  label.appendChild(span);
  label.appendChild(h3);

  // add label to todo area
  const todoArea = document.getElementById("todos");
  todoArea.appendChild(label);

  checkboxText = document.querySelectorAll(".checkbox_text");
  let checkboxes = document.querySelectorAll('input[type="checkbox"]');

  // Checkbox behaviour
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("click", function (event) {
      const todo = event.target.parentElement.querySelector(":nth-child(3)");

      // const checkboxColor =
      //   themeIcon.getAttribute("class") === "icon_white" ? "#000" : "#fff";

      if (event.target.checked) {
        todo.innerHTML = `<del>${todo.innerHTML}</del>`;
        todo.style.setProperty("--checkbox-color", "grey");
        
      } else {
        todo.innerHTML = todo.textContent;
        todo.style.setProperty("--checkbox-color", "#000");
      }
    });
  });
}

// create new todo lists
function createNewtodo() {
  addTodo(userNote.value);
  saveDataInLocal(userNote.value);
}

// Show previous tasks on load
window.onload = function () {
  showTasks();
};

function showTasks() {
  for (let i = 1; i <= localStorage.length; i++) {
    addTodo(localStorage.getItem(`todo ${i}`));
  }
}

// Apply button works
apply.addEventListener("click", function () {
  if (userNote.value === "") {
    warning.innerHTML = "NOTE: Please give a valid TODO.";
    return;
  }
  for (let i = 0; i < localStorage.length; i++) {
    if (localStorage.getItem(`todo ${i}`) == userNote.value.trim()) {
      warning.innerHTML = "NOTE: This task is already exist.";
      return;
    }
  }
  createNewtodo();
  resetInputField();
});

// Apply with Enter key
window.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    apply.click();
  }
});

// Cancel button works
cancel.addEventListener("click", function () {
  warning.innerHTML = "";
  resetInputField();
});


// select todo storages


// Remove todos


// Select menu



// Deepseek dark and light version
/*
const themeToggle = document.querySelector(".theme-toggle");
const body = document.body;
const checkboxes = document.querySelectorAll(".square_checkbox");
const searchNote = document.querySelector('input[type="search"]');

// Check for saved user preference or use system preference
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const storedTheme = localStorage.getItem('theme');
const initialTheme = storedTheme || (prefersDark ? 'dark' : 'light');

if (initialTheme === 'dark') {
  body.classList.add('dark-mode');
}

themeToggle.addEventListener("click", function() {
  body.classList.toggle('dark-mode');
  
  // Update icon
  const isDark = body.classList.contains('dark-mode');
  this.innerHTML = isDark ? moonIcon : sunIcon; // Define these elsewhere
  
  // Save preference
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// Corresponding CSS:

body.dark-mode {
  background-color: #252525;
  color: #fff;
}

body.dark-mode .head {
  color: #fff;
}

body.dark-mode input[type="search"] {
  border-color: #fff;
  background-color: transparent;
  color: #fff;
}

body.dark-mode input[type="search"]::placeholder {
  color: #fff;
  font-style: italic;
}

body.dark-mode .square_checkbox {
  color: #fff;
}
*/
