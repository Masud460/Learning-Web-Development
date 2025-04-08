// Encapsulation
// class User {
//     #username;
//     constructor(username) {
//         this.#username = username;
//     }

//     getName() {
//         return this.#username;
//     }

//     setName(name) {
//         this.#username = name;
//     }

// }
// const masud = new User('Masud')
// // console.log(masud);
// masud.setName('Mahfuj');
// console.log(masud.getName())



// Abstraction
// Using class
// class Vehicle {
//     start() {
//         console.log('Car is starting')
//     }
//     stop() {
//         console.log('Car is stopping')
//     }
// }

// class Car extends Vehicle {
//     drive() {
//         console.log('Car is driving')
//     }
// }

// // const myCar = new Car();
// // myCar.start()
// // myCar.stop()
// // myCar.drive()

// // Using Function
// function withdrawMoney(account, amount) {
//     console.log(account.withdraw(amount))
// }
// function deposit(account, amount) {
//     account.deposit(amount)
// }

// class Bank {
//     constructor(name, money) {
//         this.name = name;
//         this.money = money;
//     }

//     withdraw(amount) {
//         this.money = this.money - amount;
//         return amount;
//     }
//     deposit(amount) {
//         this.money = Number(this.money) + Number(amount);
//     }
// }

// const masud = new Bank('Masud', 100000)
// withdrawMoney(masud, 60000)
// console.log(masud.money)
// deposit(masud, '150000')
// console.log(masud.money)


// Inheritance

// Basic
// class Student {
//     constructor(name, email, id) {
//         this.name = name;
//         this.email = email;
//         this.id = id;
//     }

//     eat() {
//         console.log(`${this.name} is eating now`)
//     }
//     study() {
//         console.log(`${this.name} is studing now`)
//     }
//     sleep() {
//         console.log(`${this.name} is sleeping now`)
//     }
// }

// class Teacher extends Student {
//     constructor(name, email, id) {
//         super(name, email, id)
//     }

//     teach() {
//         console.log(`${this.name} is teaching now`)
//     }
// }

// const teacher = new Teacher('Masud', 'masud@google.com', 3245);
// const student = new Student('Mahfuj', 'mahfuj@google.com', 3424);
// teacher.eat()
// student.eat()
// student.study()
// teacher.teach()

// Method overriding
// class Student {
//     constructor(name) {
//         this.name = name;
//     }

//     sleep() {
//         console.log(`${this.name} is sleeping on students bed`)
//     }
// }

// class Teacher extends Student {
//     constructor(name) {
//         super(name)
//     }

//     sleep() {
//         console.log(`${this.name} is sleeping on teachers bed`)
//     }
// }

// const teacher = new Teacher('Masud');
// const student = new Student('Mahfuj');

// teacher.sleep()
// student.sleep()


// Polymorphism
// Using method overriding

// class Animal{
//     makeSound() {
//         console.log('The animal is sounding')
//     }
// }

// class Dog extends Animal{
//     makeSound() {
//         console.log(`The dog is berking`)
//     }
// }

// class Cat extends Animal {
//     makeSound() {
//         console.log('The cat is sounding meeaw')
//     }
// }

// const myDog = new Dog();
// const myCat = new Cat();
// myDog.makeSound()
// myCat.makeSound()


// Using Function

// function shapeDraw(shape) {
//     console.log(shape.draw())
// }

// class Circle {
//     draw() {
//         return 'A circle is drawing'
//     }
// }

// class Rectangle {
//     draw() {
//         return 'A rectangle is drawing'
//     }
// }

// const circle = new Circle()
// const rectangle = new Rectangle()

// shapeDraw(circle)
// shapeDraw(rectangle)


// Dynamic polymorphism

// class Employe{
//     details() {
//         return `Working at: `;
//     }
// }

// class Manager extends Employe {
//     details() {
//         console.log(super.details() + 'the manager role')
//     }
// }

// class Developer extends Employe{
//     details() {
//         console.log(super.details() + 'the developer role')
//     }
// }

// const manager = new Manager();
// const developer = new Developer();
// manager.details()
// developer.details()