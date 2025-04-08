const user = {
    username: 'Masud',
    price: 499,
    welcome: function () {
        console.log(this)
        return `${this.username}, welcome to the website`
    }
}
// console.log(user.welcome())
// user.username = 'Jubaer'
// console.log(user.welcome())

// console.log(this)

// function chai() {
//     let username = 'Masud';
//     console.log(this.username);
// }
// chai()

// const chai = () => {
//     let username = 'Masud';
//     console.log(this);
// }
// chai()

// const square = (num) => num * num;
// const square = (num) => (num * num);
const square = () => ({username: 'Masud'});

console.log(square())