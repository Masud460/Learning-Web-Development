const myArr = [1, 2, 3, 4, 5, 6];
for (const num of myArr) {
  // console.log(num);
}

const myName = "Masud";
// for (const eachChar of myName) {
//     console.log(eachChar);
// }

const map = new Map();
map.set("BN", "Banglades");
map.set("IN", "India");
map.set("PK", "Pakistan");
map.set("USA", "United State of America");
// console.log(map);

for (const [key, value] of map) {
  // console.log(key, ':', value);
}

const myInfo = {
  name: "Ataullah",
  age: 18,
  passion: "Student",
};
// for (const key of myInfo) {
//     console.log(key);
// }


// const myObj = {
//   game1: "NFC",
//   game2: "COC",
// };
// for (const [key, value] of myObj) {
//   console.log(key, ":", value);
// }



// for (const key in myInfo) {
//     console.log(key, ':', myInfo[key]);
// }

// for (const key of Object.keys(myInfo)) {
//     console.log(key, ':', myInfo[key]);
// }

// for (const num in myArr) {
//     console.log(num);
// }

////////////The following code won't work///////////////
// for (const [key, value] in map) {
//     console.log(key, ':', value);
// }

// myArr.forEach(function (num) {
//     console.log(num);
// })

// function printMe(num) {
//     console.log(num);
// }
// myArr.forEach(printMe)

// myArr.forEach((num, index, array) => {
//     console.log(`Num is:${num} and index is:${index} and array is:${array}`);
// })


const languages = [
    {
        languageName: 'JavaScript',
        languageFileName: 'js'
    },
    {
        languageName: 'Python',
        languageFileName: 'py'
    },
    {
        languageName: 'Java',
        languageFileName: 'java'
    }
];

languages.forEach(obj => {
    console.log(`My favourite language is: ${obj.languageName} and it's extention is: ${obj.languageFileName}`);
})