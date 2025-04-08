function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
    // return this;
}

const masud = new User('Masud', 'masud@google.com', 34523);
const mahfuj = new User('Mahfuj', 'mahfuj@google.com', 24535)
console.log(masud.constructor)
console.log(mahfuj instanceof User)