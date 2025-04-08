class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    login() {
        return `${this.username} is logged in`
    }
    logout() {
        return `${this.username} is logged out`
    }
}

const userOne = new User('Masud', 'masud@google.com', 'masud388')
console.log(userOne.login())