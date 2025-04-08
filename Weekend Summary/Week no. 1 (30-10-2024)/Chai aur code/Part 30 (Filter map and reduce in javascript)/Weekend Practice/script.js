const myNumber = [10, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let someNums = myNumber.forEach(num => {
//     console.log(num);
// })
// console.log(someNums);

// const greaterThanFive = myNumber.filter(num => num > 5)
// console.log(greaterThanFive);

// const aNum = [];
// myNumber.forEach(num => {
//     if (num > 5) {
//         aNum.push(num)
//     }
// })
// console.log(aNum);

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
const historyBooks = books.filter((book) => book.genre === "History");
// console.log(historyBooks);

// const addTenWithAll = myNumber.map(num => num + 10)
// console.log(addTenWithAll);

// myNumber.forEach(num => {
//     console.log(num + 10);
// })

// const someNumbers = myNumber
//   .map((num) => num + 10)
//   .map((num) => num * 5)
//   .filter((num) => num > 60);

// console.log(someNumbers);

const newNum = [3, 6, 3, 7, 4, 4];
// const total = newNum.reduce((acc, curVal) => {
//   console.log(`accumulator :${acc} curVal :${curVal}`);
//   return acc + curVal;
// }, 0);
// console.log(total);

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
//     console.log(`acc ${acc} curvalPrice ${curVal.price}`);
//   return acc + curVal.price;
// }, 0);
// console.log(billToPay);

let acc;
const initialValue = 0;
// newNum.forEach(num => {
//     if (acc === undefined) {
//         let newTotal = initialValue + num;
//         console.log(newTotal);
//         acc = newTotal
//     } else {
//         let anotherTotal = acc + num;
//         console.log(anotherTotal);
//         acc = anotherTotal
//     }
// })

// for (const num of newNum) {
//     if (acc === undefined) {
//         let newTotal = initialValue + num;
//         console.log(newTotal);
//         acc = newTotal
//     } else {
//         let anotherTotal = acc + num;
//         console.log(anotherTotal);
//         acc = anotherTotal
//     }

// }

// for (const num in newNum) {
//     if (acc === undefined) {
//         let newTotal = initialValue + newNum[num];
//         console.log(newTotal);
//         acc = newTotal
//     } else {
//         let anotherTotal = acc + newNum[num];
//         console.log(anotherTotal);
//         acc = anotherTotal
//     }
// }

let index = 0;
// while (index < newNum.length) {
//   if (acc === undefined) {
//     let newTotal = initialValue + newNum[index];
//     console.log(newTotal);
//     acc = newTotal;
//   } else {
//     let anotherTotal = acc + newNum[index];
//     console.log(anotherTotal);
//     acc = anotherTotal
//     }
//     index++
// }


// do {
//     if (acc === undefined) {
//         let newTotal = initialValue + newNum[index];
//         console.log(newTotal);
//         acc = newTotal
//     } else {
//         let anotherTotal = acc + newNum[index]
//         console.log(anotherTotal);
//         acc = anotherTotal
//     }
//     index++
// } while (index < newNum.length)

const myShoppingCart = [
    {
        itemName: 'JavaScript Course',
        price: 2999
    },
    {
        itemName: 'Python Course',
        price: 999
    },
    {
        itemName: 'Java Course',
        price: 99
    }
]

const myTotal = myShoppingCart.reduce((acc, curVal) => {
    return acc + curVal.price;
}, 0)
console.log(myTotal);