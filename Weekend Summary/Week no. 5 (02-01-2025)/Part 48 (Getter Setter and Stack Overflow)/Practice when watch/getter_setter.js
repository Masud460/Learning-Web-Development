class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    get email() {
        return this._email.toUpperCase()
    }
    set email(value) {
        this._email = value
    }

    get password() {
        return this._password.toUpperCase()
    }
    set password(value) {
        this._password = value
    }
}

const masud = new User('masud@google.com', 'masud')
console.log(masud.email);