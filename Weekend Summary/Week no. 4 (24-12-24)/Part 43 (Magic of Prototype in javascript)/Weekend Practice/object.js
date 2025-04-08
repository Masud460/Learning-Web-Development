// (() => {
//     console.log(this);
// })()

function sumTwoNumbers(numOne, numTwo) {
    return numOne + numTwo;
}

sumTwoNumbers.power = 243;

// console.log(sumTwoNumbers(34, 45));
// console.log(sumTwoNumbers.power);

function buyTea(username, price) {
    this.username = username;
    this.price = price;
}

buyTea.prototype.increment = function () {
    this.price++
}

buyTea.prototype.printMe = function () {
    console.log(`${this.username} bougth a tea, The price is: ${this.price}`);
}

const customerOne = new buyTea('Masud', 35)
const customerTwo = new buyTea('Mahfuj', 45)
customerOne.increment()
customerTwo.increment()
customerOne.printMe()
customerTwo.printMe()