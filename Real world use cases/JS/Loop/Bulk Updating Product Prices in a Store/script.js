let products = [
    { name: "Oud Rose", price: 100 },
    { name: "Musk Tahara", price: 120 }
];

products.forEach(product => {
    product.price *= 0.9; // Apply 10% discount
});

console.log(products);
