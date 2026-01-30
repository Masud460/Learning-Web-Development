// Dark and White
// My version

// themeIcon.addEventListener("click", function () {
//   if (themeIcon.getAttribute("class") === "icon_white") {
//     // Dark Mode
//     // Home screen
//     body.style.backgroundColor = "#252525";
//     head.style.color = "#fff";
//     this.innerHTML = `
//                           <svg class="icon_dark" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" style="font-weight: bold" viewBox="0 0 24 24">
//       <path d="M 11 0 L 11 3 L 13 3 L 13 0 L 11 0 z M 4.265625 2.8320312 L 2.8515625 4.2460938 L 4.9726562 6.3671875 L 6.3867188 4.953125 L 4.265625 2.8320312 z M 19.753906 2.8515625 L 17.632812 4.9726562 L 19.046875 6.3867188 L 21.167969 4.265625 L 19.753906 2.8515625 z M 12 5 C 8.1458495 5 5 8.1458524 5 12 C 5 15.854148 8.1458495 19 12 19 C 15.854151 19 19 15.854148 19 12 C 19 8.1458524 15.854151 5 12 5 z M 12 7 C 14.773271 7 17 9.2267307 17 12 C 17 14.773269 14.773271 17 12 17 C 9.226729 17 7 14.773269 7 12 C 7 9.2267307 9.226729 7 12 7 z M 0 11 L 0 13 L 3 13 L 3 11 L 0 11 z M 21 11 L 21 13 L 24 13 L 24 11 L 21 11 z M 4.953125 17.613281 L 2.8320312 19.734375 L 4.2460938 21.148438 L 6.3671875 19.027344 L 4.953125 17.613281 z M 19.027344 17.632812 L 17.613281 19.046875 L 19.734375 21.167969 L 21.148438 19.753906 L 19.027344 17.632812 z M 11 21 L 11 24 L 13 24 L 13 21 L 11 21 z"></path>
//       </svg>
//           `;
//     searchNote.style.borderColor = "#fff";
//     searchNote.style.backgroundColor = "transparent";
//     searchNote.style.color = "#fff";
//     searchNote.classList.add("dark_search");
//     checkboxText.forEach((box) => {
//       box.style.setProperty("--checkbox-color", "#fff");
//     });

//     // Add screen
//     // headding styles
//     addNoteHead.style.color = "#fff";

//     // add note box styles
//     addArea.style.backgroundColor = "#252525";

//     // input box styles
//     userNote.style.color = "#fff";
//     userNote.style.borderColor = "#fff";
//     userNote.style.backgroundColor = "transparent";
//     userNote.classList.add("add_note_dark");

//     // Warning Style
//     warning.style.setProperty("--warn-color", "#fff");

//     // cancel button styles
//     cancel.style.setProperty("--color", "#fff");
//     cancel.style.setProperty("--hover-color", "#fff");
//     cancel.style.setProperty("--back-color", "#252525");
//     cancel.style.setProperty("--back-hover-color", "#6c63ff");
//     cancel.style.setProperty("--border-color", "#fff");
//     cancel.style.setProperty("--border-hover-color", "#6c63ff");

//     this.classList.add("icon_dark");
//   } else {
//     // White Mode
//     // Home Screen
//     head.style.color = "#000";
//     body.style.backgroundColor = "#f7f7f7";
//     this.innerHTML = `
//                             <svg id="theme" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
//                   <path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"/></svg>
//             `;
//     searchNote.style.borderColor = "#6c63ff";
//     searchNote.style.backgroundColor = "#f7f7f7";
//     searchNote.style.color = "#6c63ff";
//     searchNote.classList.remove("dark_search");
//     checkboxText.forEach((box) => {
//     box.style.setProperty("--checkbox-color", "#000");
//     });

//     // Add Screen
//     addNoteHead.style.color = "#000";
//     addArea.style.backgroundColor = "#F7F7F7";

//     userNote.style.color = "#6c63ff";
//     userNote.style.borderColor = "#6c63ff";
//     userNote.style.backgroundColor = "#F7F7F7";
//     userNote.classList.remove("add_note_dark");

//     // Warning style
//     warning.style.setProperty("--warn-color", "#000");

//     cancel.style.setProperty("--color", "#6c63ff");
//     cancel.style.setProperty("--hover-color", "#fff");
//     cancel.style.setProperty("--back-color", "#fff");
//     cancel.style.setProperty("--back-hover-color", "#6c63ff");
//     cancel.style.setProperty("--border-color", "#6c63ff");
//     cancel.style.setProperty("--border-hover-color", "#6c63ff");

//     this.setAttribute("class", "icon_white");
//   }
// });










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