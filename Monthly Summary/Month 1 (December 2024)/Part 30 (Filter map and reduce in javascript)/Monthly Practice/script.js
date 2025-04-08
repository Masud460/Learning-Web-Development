const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// myNumbers.forEach(num => {
//     console.log(num);
// })

// const greaterThanFive = myNumbers.filter(num => {
//     return num > 5
// })
// console.log(greaterThanFive);

// myNumbers.forEach(num => {
//     if (num > 5) {
//         console.log(num);
//     }
// })

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

const history = books.filter(function (book) {
  return book.genre === "History";
});
// console.log(history);

const sumFiveWithAll = myNumbers.map(function (num) {
  return num + 5;
});

// console.log(sumFiveWithAll);
let nums = [];
myNumbers.forEach((num) => {
  if (nums) {
    nums.push(num + 5);
  }
});
// console.log(nums);

const someNums = myNumbers
  .map((num) => num + 10)
  .map((num) => num * 10)
  .filter((num) => num > 150);

// console.log(someNums);

const bills = [20, 15, 150];
const payableBill = bills.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);
// console.log(payableBill);

const someNum = [1, 2, 3, 5, 4, 5];
const myTotal = someNum.reduce((acc, curVal) => {
  return acc + curVal;
}, 0);
// console.log(myTotal);
// Expected output 20

const shoppingCart = [
  {
    itemName: "JS Course",
    price: 2999,
  },
  {
    itemName: "Python Course",
    price: 999,
  },
  {
    itemName: "CPP Course",
    price: 99,
  },
];
// const billToPay = shoppingCart.reduce((acc, curVal) => {
//   return acc + curVal.price;
// }, 2);
// console.log(billToPay);

let accumulator;
let initialValue = 0;
let index = 0;
// shoppingCart.forEach(function (item) {
//     if (accumulator === undefined) {
//         let total = initialValue + item.price;
//         console.log(total);
//         accumulator = total;
//     } else {
//         let newTotal = accumulator + item.price;
//         console.log(newTotal);
//         accumulator = newTotal
//     }
// })

// for (let item of shoppingCart) {
//     if (accumulator === undefined) {
//         let total = initialValue + item.price;
//         console.log(total);
//         accumulator = total;
//     } else {
//         let newTotal = accumulator + item.price;
//         console.log(newTotal);
//         accumulator = newTotal;
//     }
// }


// for (const item in shoppingCart) {
//     if (accumulator === undefined) {
//         let total = initialValue + shoppingCart[item].price;
//         console.log(total);
//         accumulator = total;
//     } else {
//         let newTotal = accumulator + shoppingCart[item].price;
//         console.log(newTotal);
//         accumulator = newTotal;
//     }
// }

// while (index < shoppingCart.length) {
//     if (accumulator === undefined) {
//         let total = initialValue + shoppingCart[index].price;
//         console.log(total);
//         accumulator = total;
//     } else {
//         let newTotal = accumulator + shoppingCart[index].price;
//         console.log(newTotal);
//         accumulator = newTotal;
//     }
//     index++
// }

// do {
//     if (accumulator === undefined) {
//         let total = initialValue + shoppingCart[index].price;
//         console.log(total);
//         accumulator = total;
//     } else {
//         let newTotal = accumulator + shoppingCart[index].price;
//         console.log(newTotal);
//         accumulator = newTotal;
//     }
//     index++
// } while (index < shoppingCart.length)

const cart = [
    {
        productName: 'Jacket',
        price: 599
    },
    {
        productName: 'Hoody',
        price: 1199
    },
    {
        productName: 'Cap',
        price: 2999
    }
]

const payBill = cart.reduce((acc, curVal) => acc + curVal.price, 0)
console.log(payBill);