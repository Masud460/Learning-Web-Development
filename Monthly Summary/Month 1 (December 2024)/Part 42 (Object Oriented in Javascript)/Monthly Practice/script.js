function person(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;

    // return this
}

const masud = new person('Masud', 'masud@google.com', 'dfg')
const mahfuj = new person('Mahfuj', 'mahfuj@google.com', '6867')
console.log(masud instanceof Object)
