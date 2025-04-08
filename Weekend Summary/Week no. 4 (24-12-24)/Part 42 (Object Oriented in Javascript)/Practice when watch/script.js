function user(username, loginCount, isLoggedIn) {
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    return this
}

const userOne = new user('Masud', 12, true)
const userTwo = new user('Jobaer', 10, false)
console.log(userOne instanceof Object);
// console.log(userTwo.constructor);