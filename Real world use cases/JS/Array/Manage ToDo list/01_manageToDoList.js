// References
const form = document.querySelector("form");
const userInput = document.getElementById("add");
const goals = document.getElementById("prev-tasks");
const addTask = document.getElementById("addTask");
const remvTask = document.getElementById("re-mv");

// Storage
let prevTask = [];

form.addEventListener("click", function (e) {
  e.preventDefault();
});

addTask.addEventListener("click", function () {
  prevTask.push(`${userInput.value}`);
    // goals.value = `${prevTask}, `;

    // Another solution
    goals.innerText = prevTask.join(', ')
});

remvTask.addEventListener("click", function () {
    prevTask.pop()

    if (prevTask.length === 0) {
        goals.innerText = 'There is no goal'
    } else {
        goals.innerText = prevTask.join(', ')
    }
}
)