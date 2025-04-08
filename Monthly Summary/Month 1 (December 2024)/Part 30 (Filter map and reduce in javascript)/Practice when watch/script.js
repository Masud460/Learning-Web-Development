// const coding = ['JS', 'CPP', 'Ruby', 'Python', 'Java'];

// const values = coding.forEach(function (item) {
//   return item;
// });

// console.log(values);

// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const greaterThanFours = myNumbers.filter((num) => {
//   return num > 4;
// });
// console.log(greaterThanFours);

// const newNums = [];
// myNumbers.forEach((num) => {
//   if (num > 4) {
//     newNums.push(num);
//   }
// });
// console.log(newNums);

// const books = [
//   { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//   { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//   { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//   { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//   { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//   { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//   { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//   { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//   { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
// ];

// const userBooks = books.filter((book) => {
//   return book.genre === 'History';
// });

// const publishedAfter2005AndHistorical = books.filter((book) => {
//   return book.publish > 1995 && book.genre === 'History';
// });

// console.log(publishedAfter2005AndHistorical);

// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const addTenWithAll = myNumbers.map((num) => {
//   return num + 10;
// });
// console.log(addTenWithAll);

// const newNum = [];
// myNumbers.forEach(num => {
//     if (newNum) {
//         newNum.push(num + 10)
//     }
// })
// console.log(newNum);

// const newNum = myNumbers
//   .map((num) => {
//     return num * 10;
//   })
//   .map((num) => {
//     return num + 1;
//   })
//   .filter((num) => {
//     return num > 50;
//   });
// console.log(newNum);

// const myTotal = someNum.reduce((acc, curVal) => {
//   console.log(`Accumulator value is: ${acc} and Current Value is: ${curVal}`);
//   return acc + curVal;
// })
// console.log(myTotal);
let someNum = [1, 2, 3, 5, 4, 5];
let accum;
let initialValue = 0;
// someNum.forEach(num => {
//   if (accum === undefined) {
//     let newTotal = num + initialValue;
//     console.log(newTotal);
//     accum = newTotal;
//   } else {
//     let anotherTotal = num + accum
//     console.log(anotherTotal);
//     accum = anotherTotal;
//   }
// });

//forof
// for (num of someNum) {
//   if (accum === undefined) {
//     let newTotal = initialValue + num;
//     console.log(newTotal);
//     accum = newTotal;
//   } else {
//     let anotherTotal = accum + num;
//     console.log(anotherTotal);
//     accum = anotherTotal;
//   }
// }

//forin
// for (const num in someNum) {
//   if (accum === undefined) {
//     let newTotal = initialValue + someNum[num];
//     console.log(newTotal);
//     accum = newTotal;
//   } else {
//     let anotherTotal = accum + someNum[num];
//     console.log(anotherTotal);
//     accum = anotherTotal;
//   }
// }

//while
// let aNum = 0;
// while (aNum < someNum.length) {
//   if (accum === undefined) {
//     let newTotal = initialValue + someNum[aNum];
//     console.log(newTotal);
//     accum = newTotal;
//   } else {
//     let anotherTotal = accum + someNum[aNum];
//     console.log(anotherTotal);
//     accum = anotherTotal
//   }
//   aNum++;
// }

//dowhile
// let aNum = 0;
// do {
//   if (accum === undefined) {
//     let newTotal = initialValue + someNum[aNum];
//     console.log(newTotal);
//     accum = newTotal;
//   } else {
//     let anotherTotal = accum + someNum[aNum];
//     console.log(anotherTotal);
//     accum = anotherTotal;
//   }
//   aNum++
// } while (aNum < someNum.length);



const shopingCart = [
  {
    itemName: 'JS Course',
    price: 2999
  },
  {
    itemName: 'Python Course',
    price: 999
  },
  {
    itemName: 'CPP Course',
    price: 99
  }
]

const total = shopingCart.reduce((acc, curVal) => {
  return acc + curVal.price
}, 0)
console.log(total);