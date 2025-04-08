// Singleton
// Object.create()

// Symbol
const myKey = Symbol('MyKeyOne')

// Literals
const JsUser = {
    name: 'Masud', 
    age: 18,
    [myKey]: 'Hello',
    location: 'Dhaka',
    isLoggedIn: false,
    lastLoginDays: ['Saturday', 'Sunday'],
    email: 'masud@google.com'
}
// console.log(JsUser.email)
// console.log(JsUser["email"])


JsUser.email = 'masud@chatgpt.ai';
// Object.freeze(JsUser)
JsUser.email = 'masud@microsoft.ai';

JsUser.sayHello = function () {
    return `Hello ${this.name}!`
}

console.log(JsUser.sayHello())