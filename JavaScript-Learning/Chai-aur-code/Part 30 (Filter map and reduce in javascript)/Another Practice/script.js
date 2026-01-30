const arr = ['masud', 'ataullah', 'jobaer', 'abdullah', 'mahfuj', 'saifullah'];
const greaterThanSix = arr.filter(name => name.length > 6);
const lessThanSix = arr.filter(name => name.length < 6);

// arr.forEach(name => {
//     if (name.length > 6) {
//         console.log(
//             name

//         );
//     } else {
//         return
//     }
// })




const books = [
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
  { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
  { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
  { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
  { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
  { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
  { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

const userBooks = books.filter(book => book.genre == "History");
// console.log(userBooks);


const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const addTen = nums.map(num => num + 10);

const someNums = [];
nums.forEach(num => {
    someNums.push(num + 10)
})


const newNum = nums
    .filter(num => num > 5)
    .map(num => num * 10)
    .filter(num => num > 80)
    ;

const product = [
    {
        name: 'Soap',
        price: 35
    },
    {
        name: 'Sampoo',
        price: 165
    },
    {
        name: 'Towel',
        price: 300
    },
    {
        name: 'Cloth',
        price: 1200
    },
]

const totalPrice = product.reduce((accum, curVal) => {
    console.log(`Accumulator is ${accum} and Current value is ${curVal.price}`);
    return curVal.price + accum;
}, 0)

console.log(totalPrice);