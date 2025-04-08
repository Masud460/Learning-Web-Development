function registerEmail(email) {
    this.email = email;
}

function createUser(username, email, password) {
    this.username = username;
    this.password = password;
    registerEmail.call(this, email);
}

const masud = new createUser('Masud', 'masud@gmail.com', 'lakjsdh')
console.log(masud)
