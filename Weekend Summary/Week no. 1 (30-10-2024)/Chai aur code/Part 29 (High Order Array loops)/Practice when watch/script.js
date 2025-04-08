// for of
const myArr = [1, 2, 3, 4, 5];
for (const num of myArr) {
  // console.log(num);
}

const greetings = 'Hello world!';
for (const greet of greetings) {
  if (greet == ' ') {
    // console.log('Space Detected');
    continue;
  }
  // console.log(`Each char of Greetings is: ${greet}`);
}

const map = new Map();
map.set('BN', 'Bangladesh');
map.set('IN', 'India');
map.set('PK', 'Pakistan');

// console.log(map);
for (const [key, value] of map) {
  // console.log(key, ':', value);
}

const myObj = {
  game1: 'NFC',
  game2: 'COC',
};

// The following code isn't works

// for (const [key, value] of myObj) {
//   console.log(key, ':', value);
// }

for (const key in myObj) {
  // console.log(key, ':', myObj[key]);
}

for (const key of Object.keys(myObj)) {
  // console.log(key, ':', myObj[key]);
}

const programming = ['js', 'py', 'java', 'cpp']
for (const key in programming) {
  // console.log(programming[key]);
}

const bike = ['bmw', 'pulser', 'r15', 'suzuki']
bike.forEach(function(bike) {
  // console.log(bike);
})

bike.forEach((item) => {
  // console.log(item);
})

// function printMe(item) {
//   console.log(item);
// }
// bike.forEach(printMe)

bike.forEach((item, index, arr) => {
  // console.log(item, index, arr);
})


const myCoding = [
  {
    languageName: 'JavaScript',
    languageFileName: 'js'
  },
  {
    languageName: 'Java',
    languageFileName: 'java'
  },
  {
    languageName: 'Python',
    languageFileName: 'py'
  }
]

myCoding.forEach(item => {
  console.log(item.languageFileName, item.languageName);
})