// class User {
//     constructor(username, email, password) {
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encrypt() {
//         return `${this.password} , this is encrypted`
//     }

//     changeName() {
//         return `${this.username.toUpperCase()}`
//     }
// }
// const masud = new User('Masud', 'masud@google.com', 3154)
// console.log(masud.changeName())


// Behind the scene
// function user(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
// }

// user.prototype.encrypt = function () {
//     return `${this.password}, this is encrypted`
// }
// user.prototype.changeName = function () {
//     return `${this.username.toUpperCase()}`
// }

// const mahfuj = new user('Mahfuj', 'mahfuj@google.com', 234)
// console.log(mahfuj.changeName())


// class Student {
//     constructor(username, email, password) {
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     buyCourse() {
//         return `${this.username} baught a course`
//     }
// }

// class Teacher extends Student  {
//     constructor(username, email, password,subject, salary) {
//         super(username)
//         this.email = email;
//         this.password = password;
//         this.subject = subject;
//         this.salary = salary;
//     }

//     addCourse() {
//         return `${this.username} added a course`
//     }
// }

// const haniya = new Teacher('Haniya', 'haniya@hamas.com', 18734, 'Biology', 500000)
// console.log(haniya.addCourse())

// const masud = new Student('Masud', 'masud@hamas.com', 352)
// console.log(masud.buyCourse())


class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    static createId() {
        return `${this.username.toLowerCase()}_${Math.floor(Math.random() * 999) + 100}`
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username)
        this.email = email;
        this.password = password;
    }
}

const hanif = new User('Hanif', 'hanif@gmail.com', 2345)
// console.log(hanif.createId())
const habib = new Teacher('Habib', 'habib@google.com', 345)
console.log(habib.createId())