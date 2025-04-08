// const myArr = [1, 2, 3, 4, 5]
// for (const element of myArr) {
//     console.log(element);
// }

const greeting = 'Hello World!';
for (const greet of greeting) {
  if (greet === ' ') {
    // console.log('Space Detected');
    continue;
  }
  // console.log(`Each char of greeting is: ${greet}`);
}

const map = new Map();
map.set('BN', 'Bangladesh');
map.set('PK', 'Pakistan');
map.set('IN', 'India');
// console.log(map);

for (const [key, value] of map) {
  // console.log(key, ':', value);
}

const myObj = {
  game1: 'NFS',
  game2: 'COC',
};
// for (const key of myObj) {
//     console.log(key);
// }

for (const key in myObj) {
  // console.log(key, ':', myObj[key]);
}

for (const key of Object.keys(myObj)) {
  // console.log(key, ':', myObj[key]);
}

const superHeros = ['Spiderman', 'Batman', 'Superman', 'Ironman'];
// for (const num in number) {
//     console.log(number[num]);
// }

// The following code will not work
// for (const value in map) {
//     console.log(map[value]);
// }

superHeros.forEach(function (heros) {
    // console.log(heros);
})

function printMe(heros) {
    console.log(heros);
}
// superHeros.forEach(printMe)

superHeros.forEach((heros, index, arr) => {
    // console.log(heros, index, arr);
})

const programming = [
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
];

programming.forEach(function (lang) {
    console.log(lang.languageName);
    console.log(lang.languageFileName);
})