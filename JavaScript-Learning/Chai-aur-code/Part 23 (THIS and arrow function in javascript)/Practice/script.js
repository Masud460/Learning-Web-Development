const user = {
    username: 'Masud',
    age: 18,
    display() {
        console.log(`Hello ${this.username}!`)
    }
}
// user.display()
// user.username = 'Mahfuj'
// user.display()


function literal() {
    console.log(this)
}
// literal()

const arrowFn = () => {
    console.log(this)
}
// arrowFn()

function tryTHISInFn() {
    let username = 'Masud';
    console.log(this.username)
}
// tryTHISInFn()

// const sum = (num1, num2) => num1 + num2;
const sum = (num1, num2) => (num1 + num2);
// console.log(sum(1, 2))

// const returnObj = () => ({username: 'Masud'})
const returnArr = () => ['Hey', 'Who', 'are', 'you', '?']
console.log(returnArr())