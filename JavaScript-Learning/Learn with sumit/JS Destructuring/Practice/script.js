const user = {
  name: "Masud",
  id: 234,
  age: 19,
  address: {
    city: "Dhaka",
    home: "Maniknagar",
  },
};

const { name: nm } = user;
const {
  address: { city },
} = user;
const {
  address: { union = 'Mugda' },
} = user;
// console.log(union);


const nums = [1, 2, [3, 100, 500], 4, 5];
const [one, two, three] = nums
const [ , twoo, , , five] = nums
const [, , [, hundred, fiveHundred]] = nums

let a = 'Masud';
let b = 'Mahfuj';

// let temp = a;
// a = b;
// b = temp; // Old way

[b, a] = [a, b]


// console.log(a, b)


// Playground
const {name, age, id} = {name: 'masud', age: 19, id: 345}
console.log(id)