const btn = document.getElementById('btn');

console.log();

btn.addEventListener('click', function () {
    if (!Array.from(document.body.classList).includes("dark")) {
      document.body.classList.add("dark");
      this.innerHTML = "Light";
    } else {
      document.body.classList.remove("dark");
      this.innerHTML = "Dark";
    }
})