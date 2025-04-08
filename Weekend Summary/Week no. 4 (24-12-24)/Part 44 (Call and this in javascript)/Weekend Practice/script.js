function setUsername(username) {
    this.username = username;
    console.log('I am executed');
}

function createUser(username, email, password) {
    setUsername.call(this, username)
    this.email = email;
    this.password = password;
}

const rahim = new createUser('Rahim', 'rahim@google.com', 1324)
console.log(rahim);