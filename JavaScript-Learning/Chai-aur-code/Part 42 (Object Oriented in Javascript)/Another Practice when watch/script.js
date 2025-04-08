// const student = {
//     name: 'Masud',
//     id: 345,
//     class: 'Hedayatunnahu',
//     hasInMadrasha: false,

//     addmitionInNewClass() {
//         this.class = 'Kafia'
//     }
// }
// console.log(student.class)
// student.addmitionInNewClass()
// console.log(student.class)

// function User(username, loginCount, isLoggedIn) {
//     this.username = username;
//     this.loginCount = loginCount;
//     this.isLoggedIn = isLoggedIn;
//     this.newLogin = function () {
//         this.loginCount++;
//     }

//     // return this
// }

// const masud = new User('Masud', 12, false)
// const mahfuj = new User('Mahfuj', 1, true)
// mahfuj.newLogin()
// console.log(masud instanceof Object)
// console.log(mahfuj)

// High talks
// Encapsulation
/*
class User {
    #username;
    constructor(username) {
        this.#username = username;
    }

    getUsername() {
        return this.#username;
    }

    setUsername(username) {
        this.#username = username;
    }
}
const userOne = new User('Masud')
console.log(userOne.getUsername())
userOne.setUsername('Mahfuj')
console.log(userOne.getUsername())
*/

// Abstraction

// Using class
/*
class Student {
    #studentName
    constructor(studentName) {
        this.#studentName = studentName;
    }
    eating() {
        console.log(`${this.#studentName} is eating now`)
    }
    studing() {
        console.log(`${this.#studentName} is studing now`)
    }
}

class Manager extends Student {
    foodMakeing() {
        console.log('Students food is makeing now')
    }
}

const manager = new Manager('Rahat');
manager.eating()
manager.studing()
manager.foodMakeing()
*/

// Using function
/*
function paymentProcess(paymentMethod) {
    return paymentMethod.pay();
}

class Bkash {
    pay() {
        console.log('Paid with Bkash')
    }
}

class Nagad {
    pay() {
        console.log('Paid with Nagad')
    }
}

const payByBkash = new Bkash();
const payByNagad = new Nagad();

paymentProcess(payByBkash)
paymentProcess(payByNagad)
*/

// Inheritence
// Basic Inheritance
/*
class Student {
    constructor(name) {
        this.name = name;
    }

    study() {
        console.log(`${this.name} is studing a book`)
    }
}

class Teacher extends Student {
    teach() {
        console.log(`${this.name} is teaching now`)
    }
}

const teacher = new Teacher('Rashed');
teacher.teach()
teacher.study()
*/

// Method Overriding
/*
class User {
    constructor(name) {
        this.name = name;
    }
    code() {
        console.log(`${this.name} is using the code`)
    }
}

class Developer extends User{
    code() {
        console.log(`${this.name} is writing the code`)
    }
}

const user = new User('User');
const developer = new Developer('Developer')
user.code()
developer.code()
*/

// 'super' keyword
/*
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    info() {
        console.log(`${this.name} is ${this.age} years old`)
    }
}

class Dev extends User {
    constructor(name, age, level) {
        super(name, age);
        this.level = level;
    }

    info() {
        super.info();
        console.log(`${this.name} is in ${this.level} level.`)
    }
}

const user = new User('Mahfuj', 17);
const dev = new Dev('Masud', 19, 'SD2')
user.info()
dev.info()
*/

// Polymorphism
// Method Overriding
/*
class Library {
    publishBook() {
        console.log('The library is published a new book.')
    }
}

class Islamia extends Library{
    publishBook() {
        console.log('Islamia library is trying to better the documentation.')
    }
}

class Hera extends Library {
    publishBook() {
        console.log('Hera library is focusing on the book cover, also on the documentation a little bit.')
    }
}

const library = new Library()
const islamia = new Islamia()
const hera = new Hera()
library.publishBook()
islamia.publishBook()
hera.publishBook()
*/

// Functional Polymorphism
/*
function writecode(code) {
    code.execute()
}

class JS {
    execute() {
        console.log('The JS code is executed.')
    }
}

class Python {
    execute() {
        console.log('The Python code is executed.')
    }
}

const js = new JS();
const python = new Python()
writecode(js)
writecode(python)
*/

// Dynamic Polymorphism
class Details {
  getDetails() {
    return "Person details: ";
  }
}

class Teacher extends Details {
  getDetails() {
    return super.getDetails() + "He is on teaching role";
  }
}

class Student extends Details {
  getDetails() {
    return super.getDetails() + "He is on studing role";
  }
}

function printPersonDetails(person) {
  console.log(person.getDetails());
}

const teacher = new Teacher();
const student = new Student();
printPersonDetails(teacher)
printPersonDetails(student)