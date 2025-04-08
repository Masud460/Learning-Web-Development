function setUsername(username) {
    this.username = username;
    
}

function createUser(username, email, password) {
    // setUsername.call(this, username)
    setUsername.apply(this, [username])
    this.email = email;
    this.password = password;
}

const userOne = new createUser('Masud', 'masud@google.com', 1234);

console.log(userOne);