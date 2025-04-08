class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    get password() {
        return this._password.toUpperCase()
    }
    set password(value) {
        this._password = value;
    }

    get email() {
        return this._email.toUpperCase()
    }
    set email(value) {
        this._email = value
    }
}
const masud = new User('masud@goolge.com', 'masud')
console.log(masud.password);
console.log(masud.email);