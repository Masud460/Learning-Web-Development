class user {
    constructor(username) {
        this.username = username;
    }

    logIt() {
        console.log(`Username is : ${this.username}`);
    }
}

class teacher extends user {
    constructor(username, email, password) {
        super(username)
        this.email = email;
        this.password = password;
    }

    addCourse() {
        console.log(`A new course added by ${this.username}`);        
    }
}

const rashed = new teacher('Rashed', 'rashed@google.com', '894658')
// rashed.addCourse()

const hamid = new user('Hamid')
console.log(hamid instanceof user);