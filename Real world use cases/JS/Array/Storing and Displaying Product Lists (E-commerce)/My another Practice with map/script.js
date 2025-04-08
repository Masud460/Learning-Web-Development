// Product Details
let product = [];
let totalAdded;


// references
const buy = document.querySelectorAll(".buy");
const cart = document.getElementById("details");
const table = document.querySelector("table");
const defaultTr = document.getElementById("default-tr");

// Main

buy.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    // Variables
    let id = Number(Math.floor(Math.random() * 50));
    let productName = String(
      e.target.parentElement.querySelector(".product-name").innerText
    );
    let price = Number(
      e.target.parentElement.querySelector(".price").innerText
    );
    totalAdded = product.map(function (prod) {
      return prod.price
    })
      let total = totalAdded.reduce(function (accumulator, curVal) {
        return accumulator + curVal;
    }, price)

    // function works
    function addProductDetails(id, productName, price) {
      let obj = {};
      obj.id = id;
      obj.productName = productName;
      obj.price = price;

      return obj;
    }

    product.push(addProductDetails(id, productName, price));
    totalAdded.push(price);
    console.log(total); 

    defaultTr.remove();
    table.innerHTML += `
    <tr>
        <td>${product[product.length - 1].id}</td>
        <td>${product[product.length - 1].productName}</td>
        <td>${product[product.length - 1].price}</td>
        <td>${total}</td>
    </tr>`;
  });
});
