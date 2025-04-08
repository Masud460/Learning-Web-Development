const myArr = ['MD', 'Ataullah', 'Masud']
// console.log(myArr);

function multiplyByFive(num) {
    return num * 5;
}
multiplyByFive.power = 2;

console.log(multiplyByFive(5));
console.log(multiplyByFive.power);
console.log(multiplyByFive.prototype);


function createUser(username, score) {
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function () {
    this.score++;
}

createUser.prototype.printMe = function () {
    console.log(`score is : ${this.score}`);
}

const userOne = new createUser('Monir', 32)
const userTwo = new createUser('Fahim', 159)


userOne.increment()
userTwo.increment()

userOne.printMe()
userTwo.printMe()