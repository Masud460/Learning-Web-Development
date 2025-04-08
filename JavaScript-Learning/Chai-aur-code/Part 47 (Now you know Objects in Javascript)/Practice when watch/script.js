const teacher = {
    name: 'Saifur',
    age: 45,
    isFree: true
}
Object.defineProperty(teacher, 'name', {
    writable: false
})
teacher.name = 'saifur\'s'


// console.log(Object.getOwnPropertyDescriptor(teacher, 'name'));

const chai = {
    name: 'rong cha',
    price: 10,
    order: function () {
        console.log('cha banano nai');
    }
}
Object.defineProperty(chai, 'name', {
    enumerable: false
})

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
}