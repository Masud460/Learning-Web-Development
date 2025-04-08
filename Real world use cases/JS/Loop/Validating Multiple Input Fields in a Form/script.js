const inputs = document.querySelectorAll('input');

for (input of inputs) {
    if (input.value.trim() === "") {
        console.log(`${input.name} `)
    }
}