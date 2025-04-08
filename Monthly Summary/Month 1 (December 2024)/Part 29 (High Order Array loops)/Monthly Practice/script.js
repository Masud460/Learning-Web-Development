// const myHeros = ['spiderman', 'ben10', 'roboboy']
// for (let hero of myHeros) {
//     console.log(hero);
// }

// const myName = 'Ataullah Masud';
// for (let char of myName) {
//     console.log(char);
// }

// const myMap = new Map()
// myMap.set('BN', 'Bangladesh')
// myMap.set('PK', 'Pakistan')
// myMap.set('IN', 'India')
// for (let key of myMap) {
//     console.log(key);
// }


const myObj = {
    game1: 'NFC',
    game2: 'COC',
};
// for (const key in myObj) {
//     console.log(key, ':', myObj[key]);
// }

// for (const key of Object.keys(myObj)) {
//     console.log(key, ':', myObj[key]);
// }

const myNums = [1, 2, 3, 4, 5]
// for (const num in myNums) {
//     console.log(myNums[num]);
// }

// myNums.forEach(function (num, index, arr) {
//     console.log(num, index, arr);
// })

// function printMe(num) {
//     console.log(num);
// }
// myNums.forEach(printMe)

const langDetails = [
    {
        langName: 'JavaScript',
        fileName: 'js'
    },
    {
        langName: 'Python',
        fileName: 'py'
    },
    {
        langName: 'Java',
        fileName: 'java'
    }
]

langDetails.forEach(info => {
    console.log(`Language name is: ${info.langName} and file name is: ${info.fileName}`);
})