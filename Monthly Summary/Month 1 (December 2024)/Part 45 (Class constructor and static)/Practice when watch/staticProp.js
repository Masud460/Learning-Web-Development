class user {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`username: ${this.username}`);
    }

    static createId() {
        return `${this.username.toLowerCase()}_${Math.floor(Math.random() * 899) + 100}`
    }
}

const masud = new user('Masud')
// console.log(masud.createId());

class teacher extends user {
    constructor(username, email) {
        super(username)
        this.email = email;
    }
}

const hitesh = new teacher('Hitesh', 'hitesh@google.com')
console.log(hitesh.createId());
// hitesh.logMe()