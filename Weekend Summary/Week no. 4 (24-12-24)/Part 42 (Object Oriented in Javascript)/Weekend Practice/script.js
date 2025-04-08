function user(username, password, email) {
    this.username = username;
    this.password = password;
    this.email = email;

    return this
}


const userOne = new user('Masud', 1234, 'masud@google.com')
const userTwo = new user('Mahfuj', 4321, 'mahfuj@google.com')
console.log(userOne.constructor);
console.log(userTwo instanceof Object);