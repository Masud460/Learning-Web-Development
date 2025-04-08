// const teacher = {
//     name: 'Masud',
//     password: 2143,
//     call: function () {
//         console.log('You have successfuly called');
//     }
// }
// Object.defineProperty(teacher, 'name', { writable: false })
// teacher.name = 'Jobaer'
// console.log(teacher);

// for (let [key, value] of Object.entries(teacher)) {
//     if (typeof value !== 'function') {
//         console.log(`${key} : ${value}`);
//     }
// }

const chai = {
    name: 'rong cha',
    price: 10,
    order: function () {
        console.log(`${this.name} is ordered!`);
    }
}

Object.defineProperty(chai, 'name', {enumerable: false})

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
}