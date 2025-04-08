class user {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`Username: ${this.username}`);
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

const simon = new teacher('Simon', 'simon@gmail.com', '4325')
const rohan = new user('Rohan')
simon.logMe()
simon.addCourse()
rohan.logMe()
// rohan.addCourse()

// console.log(simon instanceof rohan);