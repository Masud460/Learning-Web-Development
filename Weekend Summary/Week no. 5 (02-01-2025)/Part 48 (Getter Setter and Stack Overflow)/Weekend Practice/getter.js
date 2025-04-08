// class User {
//     constructor(username, email, password) {
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     get password() {
//         return this._password.toUpperCase()
//     }
//     set password(value) {
//         this._password = value;
//         // console.log(value);
//     }

//     get email() {
//         return this._email.toUpperCase()
//     }
//     set email(value) {
//         this._email = value
//     }
// }
// const masud = new User('Masud', 'masud@google.com', 'maassuudd')
// console.log(masud.email);

// old time modern way
// function User(email, password) {
//     this._email = email;
//     this._password = password;

//     Object.defineProperty(this, 'password', {
//         get: function () {
//             return `${this._password.toUpperCase()}`
//         },
//         set: function (value) {
//             this._password = value;
//         }
//     })
//     Object.defineProperty(this, 'email', {
//         get: function () {
//             return `${this._email.toUpperCase()}`
//         },
//         set: function (value) {
//             this._email = value;
//         }
//     })
// }


// let masud = new User('masud@google.com', 'masud')
// console.log(masud.password);
// console.log(masud.email);


// In object way

const User = {
    _username: 'Masud',
    _email: 'masud@google.com',
    _password: 'djfh',

    get email() {
        return `${this._email.toUpperCase()}`
    },
    set email(value) {
        this._email = value
    },
    get password() {
        return `${this._password.toUpperCase()}`
    },
    set password(value) {
        this._password = value
    },
}
console.log(User.email);
console.log(User.password);