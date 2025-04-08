// class User {
//     constructor(username, password, email) {
//         this.username = username;
//         this._password = password;
//         this._email = email;
//     }

//     get email() {
//         return `aswrong${this._email}`;
//     }

//     set email(value) {
//         this._email = value;
//     }

//     get password() {
//         return this._password.toUpperCase();
//     }
    
//     set password(value) {
//         this._password = value;
//     }
// }

// const masud = new User('Masud', 'masud388', 'masud@google.com')
// console.log(masud.email)


// class Student {
//     constructor(name, id, password) {
//         this._name = name;
//         this._id = id;
//         this._password = password;
//     }

//     get name() {
//         return `stu${this._name}dent`;
//     }
//     set name(value) {
//         this._name = value;
//     }
// }
// const masud = new Student('Masud', 343, 'adhf8');
// console.log(masud)



// function User(email, password) {
//     this._email = email;
//     this._password = password;

//     Object.defineProperty(this, 'email', {
//         get: function () {
//             return `noreplay${this._email}`
//         },
//         set: function (value) {
//             this._email = value;
//         }
//     })
//     Object.defineProperty(this, 'password', {
//         get: function () {
//             return `${this._password.toUpperCase()}`
//         },
//         set: function (value) {
//             this._password = value;
//         }
//     })
// }

// const mahfuj = new User('mahfuj@google.com', 'mahfuj110')
// console.log(mahfuj.email)
// console.log(mahfuj.password)


const User = {
    _email: 'masud@google.com',
    _password: 'masud388',

    get email() {
        return this._email.toUpperCase()
    },
    get password() {
        return this._password.toUpperCase()
    },
    set email(value) {
        this._email = value;
    },
    set password(value) {
        this._password = value;
    }
}

console.log(User.email)
User.email = 'ataullah@google.com'
console.log(User.email)
console.log(User.password)
User.password = 'm388';
console.log(User.password)