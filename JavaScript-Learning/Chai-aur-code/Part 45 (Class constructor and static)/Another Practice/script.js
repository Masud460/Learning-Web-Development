// class User {
//     constructor(username, email, password) {
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword() {
//         console.log(`${this.password} is encrypted`)
//     }

//     changeUsername() {
//         console.log(`${this.username.toUpperCase()}`)
//     }
// }

// const masud = new User('Masud', 'masud@google.com', '242')
// masud.encryptPassword()
// masud.changeUsername()


// console.log(masud)


// Behind the scene
// function User(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;


// }
// User.prototype.encryptPassword = function () {
//     console.log(`${this.password} is encrypted`)
// }
// User.prototype.changeUsername = function () {
//     console.log(`${this.username.toUpperCase()}`)
// }

// const mahfuj = new User('Mahfuj', 'mahfuj@google.com', '342')
// mahfuj.encryptPassword()
// mahfuj.changeUsername()


class Student{
    constructor(username, id) {
        this.username = username;
        this.id = id
    }
    getBook() {
        return `${this.username} is picked a book from the library`
    }
    static writeBad() {
        return `${this.username} has written something bad`
    }
}

class Teacher extends Student {
    constructor(username, id, password) {
        super(username, id)
        this.password = password;
    }

    addCourse() {
        return `A new course was added by ${this.username}`
    }

    static fired() {
        return `${this.username} is fired`
    }
}
const teacher = new Teacher('Masud', 34, 234234);
const student = new Student('Mahfuj', 2345)
// console.log(student.addCourse())
// console.log(teacher.addCourse())
// console.log(student.getBook())
// console.log(teacher.getBook())
console.log(teacher.writeBad())