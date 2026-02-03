// References
const container = document.querySelector(".container");
const body = document.body;

// Home screen elements
const head = document.querySelector(".head");
const searchNote = document.getElementById("search_note");
const select = document.querySelector("select");
const todoArea = document.getElementById("todos");

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

  // Best Practice
  const todo = {
    id: Date.now(),
    text: userNoteValue,
  };
  localStorage.setItem(todo.id, JSON.stringify(todo));
  return todo;

  // My version
  // let key = userDetail;
  // localStorage.setItem(key, userNoteValue)
}

// Reseting input field after using it
function resetInputField() {
  userNote.value = "";
  addArea.style.display = "none";
  overlay.style.display = "none";
}

// Add items to the todo area
function addTodo(todoText, id) {
  const label = document.createElement("label");
  const input = document.createElement("input");
  const span = document.createElement("span");
  const h3 = document.createElement("h3");
  const removeBtn = document.createElement("button");
  const textColor =
    themeIcon.getAttribute("class") === "icon_white" ? "#000" : "#fff";
  h3.style.setProperty("--checkbox-color", textColor);

  // modification
  label.classList.add("square_checkbox");
  input.type = "checkbox";
  span.classList.add("checkbox");
  h3.innerHTML = todoText;
  h3.classList.add("checkbox_text");
  removeBtn.innerText = "x";
  removeBtn.classList.add("btn_remove");

  // add these in label
  label.appendChild(input);
  label.appendChild(span);
  label.appendChild(h3);
  label.appendChild(removeBtn);

  // add label to todo area
  todoArea.appendChild(label);

  checkboxText = document.querySelectorAll(".checkbox_text");
  let checkboxes = document.querySelectorAll('input[type="checkbox"]');

  // set ids to label tag
  let ids = [];
  let todoList = document.querySelectorAll(".square_checkbox");
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    ids.push(key);
  }
  for (let i = 0; i < localStorage.length; i++) {
    todoList[i].dataset.id = ids.sort()[i];
  }

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
  let data = saveDataInLocal(userNote.value);
  addTodo(data.text, data.id);
}

// Show previous tasks on load
window.onload = function (e) {
  showTasks();
};

function showTasks() {
  // Best Practice
  let keys = [];
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    keys.push(key);
  }
  
  keys
    .sort()
    .forEach((key) => {
    let text = JSON.parse(localStorage.getItem(key)).text;
    addTodo(text);
  });

  // My version
  // for (let i = 0; i < localStorage.length; i++) {
  //   let key = localStorage.key(i)
  //   addTodo(localStorage.getItem(`${key}`));
  // }
}

// Apply button works
apply.addEventListener("click", function () {
  if (userNote.value === "") {
    warning.innerHTML = "NOTE: Please give a valid TODO.";
    return;
  }

  // !Need to fix
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

//

// Remove todos
todoArea.addEventListener("click", (e) => {
  // Best Practice
  let todoItem = e.target.parentElement;
  if (e.target.tagName == "BUTTON") {
    todoItem.remove();
  }

  // Remove from localStorage
  let todoId = todoItem.dataset.id;
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let localId = JSON.parse(localStorage.getItem(key)).id;
    if (Number(todoId) == Number(localId)) {
      localStorage.removeItem(key);
    }
  }

  // My version
  //   let todoItem = e.target.parentElement;
  //   let todoText = todoItem.querySelector(':nth-child(3)').textContent;
  //   if (e.target.tagName == "BUTTON") {
  //     todoItem.remove()
  //   }
  //     for (let i = 0; i < localStorage.length; i++) {
  //       let key = localStorage.key(i);
  //       let storageItem = localStorage.getItem(key);
  //       if (todoText == storageItem) {
  //         localStorage.removeItem(key);
  //       }
  //     }
});

// Select menu
