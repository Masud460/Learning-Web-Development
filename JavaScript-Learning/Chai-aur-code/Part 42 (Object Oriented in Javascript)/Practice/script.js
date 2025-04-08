function user(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this
}

const userOne = new user('Ataullah', 11, true)
const userTwo = new user('Masud', 12, false)

console.log(userTwo.constructor);
console.log(userOne instanceof Object);