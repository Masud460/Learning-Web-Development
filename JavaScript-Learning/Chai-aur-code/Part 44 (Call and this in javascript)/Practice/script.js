function createUser(username, email, password) {
    
    console.log(this);
    setUsername.call(this, username)
    this.email = email;
    this.password = password;
}

function setUsername(username) {
    this.username = username;
    console.log('Executed');
}


const userOne = new createUser('Masud', 'masud@google.com', 1234)
console.log(userOne);