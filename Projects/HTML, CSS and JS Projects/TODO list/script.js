// References
const container = document.querySelector(".container");
const body = document.body;

// Home screen elements
const head = document.querySelector(".head");
const searchNote = document.getElementById("search_note");
const select = document.querySelector("select");
const options = document.querySelectorAll("option");
const todoArea = document.getElementById("todos");

// Add New Note
const addNote = document.querySelector(".add_btn");
const addArea = document.querySelector(".add_area");
const addNoteHead = document.getElementById("add_note_head");
const userNote = document.getElementById("usernote");
const apply = document.querySelector(".apply_btn");
const cancel = document.getElementById("cancel_btn");

// Control Dark and White
const themeChanger = document.querySelector(".theme-changer");

// Set complete function
function setCompletiton(parent, condition) {
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);

    if (key !== "theme" && key !== "theme-icon") {
      let data = JSON.parse(localStorage.getItem(key));

      if (data.id == parent.dataset.id) {
        data.completed = condition;
        localStorage.setItem(key, JSON.stringify(data));
      }
    }
  }
}

// Checkbox done effect
function checkboxDoneEffect() {
  let checkboxes = document.querySelectorAll("input[type='checkbox']");

  // Every todo done effect
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("click", function (event) {
      const todo = event.target.parentElement.querySelector(
        "label :nth-child(3)"
      );
      const label = event.target.parentElement;

      if (event.target.checked) {
        todo.classList.add("done");

        // Set completed true
        setCompletiton(label, true);
      } else {
        todo.classList.remove("done");
        // Set completed false
        setCompletiton(label, false);
      }
    });
  });
}

// Dark and White
const toggleTheme = () => {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
};
const toggleThemeIcon = () => {
  const current = themeChanger.innerHTML;
  const themeIconLight = `<svg id="theme" class="theme-changer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
          <path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"/></svg>`;
  const themeIconDark = `<svg class="icon_dark" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" style="font-weight: bold" viewBox="0 0 24 24">
       <path d="M 11 0 L 11 3 L 13 3 L 13 0 L 11 0 z M 4.265625 2.8320312 L 2.8515625 4.2460938 L 4.9726562 6.3671875 L 6.3867188 4.953125 L 4.265625 2.8320312 z M 19.753906 2.8515625 L 17.632812 4.9726562 L 19.046875 6.3867188 L 21.167969 4.265625 L 19.753906 2.8515625 z M 12 5 C 8.1458495 5 5 8.1458524 5 12 C 5 15.854148 8.1458495 19 12 19 C 15.854151 19 19 15.854148 19 12 C 19 8.1458524 15.854151 5 12 5 z M 12 7 C 14.773271 7 17 9.2267307 17 12 C 17 14.773269 14.773271 17 12 17 C 9.226729 17 7 14.773269 7 12 C 7 9.2267307 9.226729 7 12 7 z M 0 11 L 0 13 L 3 13 L 3 11 L 0 11 z M 21 11 L 21 13 L 24 13 L 24 11 L 21 11 z M 4.953125 17.613281 L 2.8320312 19.734375 L 4.2460938 21.148438 L 6.3671875 19.027344 L 4.953125 17.613281 z M 19.027344 17.632812 L 17.613281 19.046875 L 19.734375 21.167969 L 21.148438 19.753906 L 19.027344 17.632812 z M 11 21 L 11 24 L 13 24 L 13 21 L 11 21 z"></path>
       </svg>`;
  const next = current === themeIconDark ? themeIconLight : themeIconDark;
  themeChanger.innerHTML = next;
  localStorage.setItem("theme-icon", next);
};

themeChanger.addEventListener("click", function () {
  toggleTheme();
  toggleThemeIcon();
});

// Display blurring when add area opens
const overlay = document.createElement("div");
overlay.classList.add("overlay");
body.appendChild(overlay);

// Show warning
const warning = document.getElementById("warn");

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
    completed: false,
  };
  localStorage.setItem(todo.id, JSON.stringify(todo));
  return todo;
}

// Reseting input field after using it
function resetInputField() {
  userNote.value = "";
  addArea.style.display = "none";
  overlay.style.display = "none";
}

// Add items to the todo area
function addTodo(todoText, id, isChecked) {
  const label = document.createElement("label");
  const input = document.createElement("input");
  const span = document.createElement("span");
  const h3 = document.createElement("h3");
  const removeBtn = document.createElement("button");

  // modification
  label.classList.add("square_checkbox");
  label.dataset.id = id;
  input.type = "checkbox";
  span.classList.add("checkbox");
  input.checked = isChecked;
  h3.innerHTML = todoText;
  h3.classList.add(isChecked ? "done" : "not-done");
  removeBtn.innerText = "×";
  removeBtn.classList.add("btn_remove");

  // add these in label
  label.appendChild(input);
  label.appendChild(span);
  label.appendChild(h3);
  label.appendChild(removeBtn);

  // add label to todo area
  todoArea.appendChild(label);

  checkboxDoneEffect();
}

// create new todo lists
function createNewtodo() {
  let data = saveDataInLocal(userNote.value);
  addTodo(data.text, data.id);
}

// Show previous tasks on load
window.onload = function () {
  // Display previous tasks
  showTasks();

  // Set theme
  // onload theme change
  const savedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);

  // onload theme icon change
  const themeIconLight = `<svg id="theme" class="theme-changer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
          <path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"/></svg>`;
  const savedThemeIcon = localStorage.getItem("theme-icon") || themeIconLight;
  themeChanger.innerHTML = savedThemeIcon;
};

function showTasks() {
  // Best Practice
  let keys = [];
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    keys.push(key);
  }
  keys.sort().forEach((key) => {
    if (key !== "theme" && key !== "theme-icon") {
      let text = JSON.parse(localStorage.getItem(key)).text;
      let id = JSON.parse(localStorage.getItem(key)).id;
      let isComplete = JSON.parse(localStorage.getItem(key)).completed;
      addTodo(text, id, isComplete);
    }
  });
}

// Apply button works
apply.addEventListener("click", function () {
  if (userNote.value === "") {
    warning.innerHTML = "NOTE: Please give a valid TODO.";
    return;
  }

  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    if (key !== "theme" && key !== "theme-icon") {
      let todoText = JSON.parse(localStorage.getItem(key)).text;
      if (todoText.trim() == userNote.value.trim()) {
        warning.innerHTML = "NOTE: This task is already exist.";
        return;
      } else {
        warning.innerHTML = "";
      }
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


// Remove todos
todoArea.addEventListener("click", (e) => {
  // Best Practice
  let todoItem = e.target.parentElement;
  if (e.target.tagName == "BUTTON") {
    todoItem.remove();

    // Remove from localStorage
    let todoId = todoItem.dataset.id;
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      if (key !== "theme" && key !== "theme-icon") {
        let localId = JSON.parse(localStorage.getItem(key)).id;
        if (todoId == localId) {
          localStorage.removeItem(key);
        }
      }
    }
  }
});

// Select menu
const allTodos = document.getElementById("all_todos");
allTodos.addEventListener("input", function (e) {
  let select = e.target;
  let labels = document.querySelectorAll(".square_checkbox");

  function optionControl(option) {
    if (select.value == option) {
      labels.forEach((label) => {
        console.log(label);
        label.remove();
      });
      let ids = [];
      let database = [];
      for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        // Saving ids
        if (key != "theme" && key != "theme-icon") {
          ids.push(key);
        }
      }
      // Using ids
      ids.forEach((id) => {
        let userData = JSON.parse(localStorage.getItem(id));
        database.push(userData);
      });
      database.reverse();
      database.forEach((data) => {
        switch (option) {
          case "complete":
            if (data.completed) {
              addTodo(data.text, data.id, data.completed);
            }
            break;
          case "incomplete":
            if (!data.completed) {
              addTodo(data.text, data.id, data.completed);
            }
            break;
          default:
            addTodo(data.text, data.id, data.completed);
            break;
        }
      });
    }
  }
  optionControl(select.value);
});

// Search Notes
searchNote.addEventListener("input", function (e) {
  const userInput = e.target.value.toLowerCase();
  console.log(userInput);
  let savedTodos = [];
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    if (key !== "theme" && key !== "theme-icon") {
      let todo = JSON.parse(localStorage.getItem(key));
      savedTodos.push(todo);
    }
  }

  savedTodos.forEach(todo => {
    let todoText = (todo.text).split("")
  })
  
  // savedTodos.forEach((todo) => {
  //   // for removing previous todos
  //   let labels = document.querySelectorAll(".square_checkbox");

  //   const todoText = (todo.text).toLowerCase();
  //   const todoWords = todoText.split(" ");
  //   const userInputWords = userInput.split(" ");

  // for (word of todoWords) {
  //   for (userWord of userInputWords) {
  //     if (word == userWord) {
  //       // for removing previous todos
  //       labels.forEach((label) => {
  //         label.remove();
  //       });
  //       addTodo(todo.text, todo.id, todo.completed);
  //     }
  //   }
  // }
  // });
});
