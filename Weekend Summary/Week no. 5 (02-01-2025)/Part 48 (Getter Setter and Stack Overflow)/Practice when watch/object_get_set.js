const User = {
    _email: 'masud@google.com',
    _password: 'masud',

    get email() {
        return this._email.toUpperCase()
    },
    set email(value) {
        this._email = value
    },

    get password() {
        return this._password.toUpperCase()
    },
    set password(value) {
        this._password = value
    }
}

const masud = Object.create(User)
console.log(masud.email);
console.log(masud.password);