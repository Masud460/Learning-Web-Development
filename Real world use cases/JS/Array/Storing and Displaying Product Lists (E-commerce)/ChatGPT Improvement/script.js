// Product Details
let product = [];
let totalAdded = 0;

// References
const buy = document.querySelectorAll(".buy");
const table = document.querySelector("table");
const defaultTr = document.getElementById("default-tr");

// Main
buy.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    // Generate a unique ID using timestamp
    let id = Date.now();  
    let productName = e.target.parentElement.querySelector(".product-name").innerText;
    let price = Number(e.target.parentElement.querySelector(".price").innerText);

    // Calculate total price
    totalAdded += price;

    // Create a product object
    let productObj = { id, productName, price };

    // Push to the product array
    product.push(productObj);

    // Remove default row if it exists
    if (defaultTr) defaultTr.remove();

    // Create a new table row
    let newRow = table.insertRow(-1);
    newRow.innerHTML = `
        <td>${id}</td>
        <td>${productName}</td>
        <td>$${price}</td>
        <td>$${totalAdded}</td>
    `;
  });
});
