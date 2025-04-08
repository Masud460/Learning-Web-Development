const singleton = new Object();
const constructor = Object.create;
const symbol = Symbol('mysymbol');

const user = {
    name: 'Masud',
    email: 'masud@google.com',
    password: 'fq34',
    [symbol]: 'My Symbol',
    isLoggedIn: true
}
// Object.freeze(user)
user.name = 'Ataullah Masud';

user.greeting = function () {
    return `Hello ${this.name}!`
}
// console.log(user[symbol])
console.log(user.greeting())