const addToCart = document.querySelectorAll(".add");
const totalPrice = document.querySelector(".total-price");
const totalItem = document.querySelector(".total-item");
const price = document.querySelectorAll(".price");
const placeOrder = document.querySelector(".place-order");

let items = 1;
let prices = [];
addToCart.forEach(function (button) {
  button.addEventListener("click", function () {
    let classNames = this.className;
    // if (items <= prices.length) {
    //     console.log(items)
    //     items++
    // }
    switch (classNames) {
      case "add mini":
        prices.push(799.99);
        break;
      case "add pro":
        prices.push(899.99);
        break;
      case "add max":
        prices.push(999.99);
        break;
    }
    let finalPrice = prices.reduce((acc, curVal) => {
      return acc + curVal;
    }, 0);
    totalItem.textContent = "Items: " + items++;
    totalPrice.textContent = "$" + finalPrice.toFixed(2);
  });
});

placeOrder.addEventListener("click", function () {
  this.style.background = "#00ff4c";
  this.style.width = "90%";
  this.style.animation = "place 1s ease";
  totalPrice.style.display = "none";
  totalItem.style.display = "none";
});

placeOrder.addEventListener('animationend', function () {
  this.textContent = "Order placed! Thank you for shopping in our store";
})