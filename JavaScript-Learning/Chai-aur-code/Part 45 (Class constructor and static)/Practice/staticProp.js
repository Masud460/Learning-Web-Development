class user {
    constructor(username) {
        this.username = username;
    }

    static createId() {
        return `${this.username.toLowerCase()}_${Math.floor(Math.random() * 899) + 100}`
    }
}

class teacher extends user {
    constructor(username) {
        super(username)
    }
}

const masud = new user('Masud')
const jobaer = new teacher('Masud')
// console.log(masud.createId());
console.log(jobaer.createId());