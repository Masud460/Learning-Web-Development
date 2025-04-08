// class User {
//     constructor(username, email, password) {
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword() {
//         return `Password encrypted: ${this.password}`
//     }
//     changeUsername() {
//         return `${this.username.toUpperCase()}`
//     }
// }
// const masud = new User('Masud', 'masud@google.com', '234')
// console.log(masud.changeUsername());

// behind the scene
// function User(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
// }

// User.prototype.encryptPassword = function () {
//     return `Password encrypted: ${this.password}`
// }
// User.prototype.changeUsername = function () {
//     return `${this.username.toUpperCase()}`
// }

// const masud = new User('Masud', 'masud@google.com', '1234')
// console.log(masud.encryptPassword());

// class Customer {
//     constructor(username, email) {
//         this.name = username;
//         this.email = email;
//     }

//     orderTea() {
//         return `${this.name} ordered a tea`
//     }
//     payBill() {
//         return `${this.name} paid bill`
//     }
//     static createId() {
//         return `${this.name.toLowerCase()}_${Math.floor(Math.random() * 899) + 100}`
//     }
// }

// class Manager extends Customer {
//     constructor(name, email, password) {
//         super(name)
//         this.email = email;
//         this.password = password;
//     }

//     getFreeTea() {
//         return `${this.name} is manager, so he deserves free tea`
//     }
// }

// const meem = new Customer('Meem', 'meem@google.com')
// const masud = new Manager('Masud', 'masud@google.com', '1234')

// console.log(meem.createId());


// inheritance
class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }
    static createId() {
        return `${this.username.toLowerCase()}_${Math.floor(Math.random() * 899) + 100}`
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username)
        this.email = email;
        this.password = password;
    }
}

const teacher = new Teacher('Masud', 'masud@google.com', '3452')
const user = new User('Mahfuj', 'mahfuj@google.com')
console.log(teacher);