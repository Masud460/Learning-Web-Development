// class User {
//     constructor(username, email, password) {
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     get username() {
//         return this._username.toUpperCase();
//     }
//     set username(value) {
//         this._username = value;
//     }

//     get email() {
//         return this._email.toUpperCase()
//     }
//     set email(value) {
//         this._email = value;
//     }
// }
// const masud = new User('Masud', 'masud@google.com', 234)
// console.log(masud.username)
// console.log(masud.email)


/// modern way
// function user(username, email, password) {
//     this._username = username;
//     this.email = email;
//     this.password = password;

//     Object.defineProperty(this, 'username', {
//         get: function () {
//             return this._username.toUpperCase()
//         },
//         set: function (value) {
//             this._username = value;
//         }
//     })
// }
// const masud = new user('Masud', 'masud@google.com', 'ahdfkh')
// console.log(masud.username)


// Object way
const user = {
    _username: 'Masud',
    email: 'masud@google.com',
    password: 'masud388',
    get username() {
        return this._username.toUpperCase()
    },
    set username(value) {
        this._username = value;
    }
}
const masud = Object.create(user)
console.log(masud.username)