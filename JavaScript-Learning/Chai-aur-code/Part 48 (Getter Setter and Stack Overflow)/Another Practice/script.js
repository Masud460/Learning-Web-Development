// class User {
//     constructor(username, email, password) {
//         this.username = username;
//         this._email = email;
//         this.password = password;
//     }

//     get email() {
//         return this._email.toUpperCase();
//     }
//     set email(value) {
//         this._email = value;
//     }
// }
// const masud = new User('Masud', 'masud@google.com', 23543);
// console.log(masud.email)


// Old modern way
// function User(username, email, password) {
//     this._username = username;
//     this._email = email;
//     this._password = password;

//     Object.defineProperty(this, 'email', {
//         get: function () {
//             return this._email.toUpperCase()
//         },
//         set: function (value) {
//             this._email = value;
//         }
//     })
// }
// const masud = new User('Masud', 'masud@google.com', 2344);
// console.log(masud.email)
// masud.email = 'masud@microsoft.com';
// console.log(masud.email)


// Old Object way
const User = {
    _name: 'Masud',
    _email: 'masud@google.com',
    _password: 2375,

    set email(value) {
        this._email = value;
    },
    get email() {
        return this._email.toUpperCase()
    },
}
console.log(User.email)
User.email = 'masud@microsoft.com'
console.log(User.email)