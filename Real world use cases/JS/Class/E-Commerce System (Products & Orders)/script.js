class Product {
    constructor(name, price, stock) {
        this.name = name;
        this.price = price;
        this.stock = stock;
    }

    discount(amount) {
        return this.price -= amount;
    }
}

const attar = new Product('Ameer Al Oud', 240, 12)
attar.discount(29)
console.log(attar.price)