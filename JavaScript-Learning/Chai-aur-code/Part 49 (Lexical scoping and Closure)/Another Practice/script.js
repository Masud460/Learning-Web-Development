function outer() {
  let name = "Masud";
  function inner() {
    console.log(name);
  }
  inner();
}
// outer()

function myFunc() {
  let name = "Masud";
  function displayName() {
    console.log(name);
  }

  return displayName;
}

// const finalFunc = myFunc();
// finalFunc()

const orange = document.getElementById("orange");
const green = document.getElementById("green");

function changeColor(color) {
  return function () {
    document.body.style.backgroundColor = color;
  };
}

orange.onclick = changeColor("orange");
green.onclick = changeColor("green");
