// class user {
//     constructor(username, email, password) {
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword() {
//         return `Encrypted : ${this.password}`
//     }
//     changeUsername() {
//         return `${this.username.toUpperCase()}`
//     }
// }

// const rohan = new user('Rohan', 'rohan@google.com', '1345')
// console.log(rohan.encryptPassword());
// console.log(rohan.changeUsername());

// behind the scene
// function user(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
// }

// user.prototype.encryptPassword = function () {
//     return `Encrypted : ${this.password}`
// }
// user.prototype.changeUsername = function () {
//     return `${this.username.toUpperCase()}`
// }

// const himel = new user('Himel', 'himel@gmail.com', '1344')
// console.log(himel.encryptPassword());
// console.log(himel.changeUsername());