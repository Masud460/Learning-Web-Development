const user = {
  id: 234,
  name: "Masud",
  age: 19,
  // education: {
  //     degree: 'Masters'
  // }
};

// const { name: title } = user;
// const {education: {degree}} = user
// const {education: {degree} = {}} = user
// console.log(degree)

// let numbers = [1, 2, 3, 4, 5];
let numbers = [1, 2, [3, 100, 500], 4, 5];
// let [a, b] = numbers
// let [,a, ,,b] = numbers
// let [,,[,a, b]] = numbers

// let a = 1;
// let b = 2;
// [b, a] = [a, b]

let a = 1;
let b = 2;

let temp = a;
a = b;
b = temp;

console.log(a, b)