class user5 {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword() {
        return `${this.password} is encrypted`
    }

    changeUsername() {
        return `${this.username.toUpperCase()}`
    }
}

// const masud = new user('Masud', 'masud@google.com', '1234')
// console.log(masud.encryptPassword());
// console.log(masud.changeUsername());

// behind the scene
function user(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

user.prototype.encryptPassword = function () {
    return `${this.password} is encrypted`
}

user.prototype.changeUsername = function () {
    return `${this.username.toUpperCase()}`
}

// const mahfuj = new user('Mahfuj', 'mahfuj@google.com', '4321')

// console.log(mahfuj.encryptPassword());
// console.log(mahfuj.changeUsername());