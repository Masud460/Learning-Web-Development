/*
Debouncing is a technique used to limit how often a function runs (e.g., in search inputs or resizing windows).
*/

function debounce(func, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => func(...args), delay);
    };
}

// Example Usage:
const search = debounce(() => console.log("Searching..."), 500);

search();
search();
search();
// Only the last call will execute after 500ms
