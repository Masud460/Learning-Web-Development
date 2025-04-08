const myNumbers = [1, 2, 3, 4, 5, 6, 7];
const greaterFive = myNumbers.filter((num) => num > 5);
// console.log(greaterFive);

let newNum = [];
myNumbers.forEach((num) => {
  if (num > 5) {
    newNum.push(num);
  }
});
// console.log(newNum);

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

const historyBook = books.filter((book) => {
  return book.genre === "History";
});

const historyAndBefore2005 = books.filter((book) => {
  return book.genre === "History" && book.publish < 2005;
});
// console.log(historyAndBefore2005);

const addTenWithAll = myNumbers.map((num) => num + 10);
// console.log(addTenWithAll);
// const pusing = [];
// myNumbers.forEach(num => {
//     if (true) {
//         pusing.push(num)
//     }
// })
// console.log(pusing);

const addTenMutliplyTenGreaterHundredFifty = myNumbers
  .map((num) => num + 10)
  .map((num) => num * 10)
  .filter((num) => num > 150);
// console.log(addTenMutliplyTenGreaterHundredFifty);

const someNum = [1, 2, 3, 5, 4, 5];
let accumulator;
const initialValue = 0;
//forEach

// someNum.forEach(num => {
//     if (accumulator === undefined) {
//         let newTotal = initialValue + num;
//         console.log(newTotal);
//         accumulator = newTotal;
//     } else {
//         let anotherTotal = accumulator + num;
//         console.log(anotherTotal);
//         accumulator = anotherTotal;
//     }
// })

//forof

// for (const num of someNum) {
//     if (accumulator === undefined) {
//         let newTotal = initialValue + num;
//         console.log(newTotal);
//         accumulator = newTotal;
//     } else {
//         let anotherTotal = accumulator + num;
//         console.log(anotherTotal);
//         accumulator = anotherTotal;
//     }
// }

// forin

// for (const num in someNum) {
//     if (accumulator === undefined) {
//         let newTotal = initialValue + someNum[num];
//         console.log(newTotal);
//         accumulator = newTotal;
//     } else {
//         let anotherTotal = accumulator + someNum[num];
//         console.log(anotherTotal);
//         accumulator = anotherTotal;
//     }
// }

//while loop
// let aNum = 0;
// while (aNum < someNum.length) {
//     if (accumulator === undefined) {
//         let newTotal = initialValue + someNum[aNum];
//         console.log(newTotal);
//         accumulator = newTotal;
//     } else {
//         let anotherTotal = accumulator + someNum[aNum];
//         console.log(anotherTotal);
//         accumulator = anotherTotal;
//     }
//     aNum = aNum + 1;
// }

//dowhile loop
// let aNum = 0;
// do {
//     if (accumulator === undefined) {
//         let newTotal = initialValue + someNum[aNum];
//         console.log(newTotal);
//         accumulator = newTotal;
//     } else {
//         let anotherTotal = accumulator + someNum[aNum];
//         console.log(anotherTotal);
//         accumulator = anotherTotal;
//     }
//     aNum++;
// } while (aNum < someNum.length)

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

const billToPay = shoppingCart.reduce((acc, curVal) => {
    return acc + curVal.price;
}, 0)
console.log(billToPay);