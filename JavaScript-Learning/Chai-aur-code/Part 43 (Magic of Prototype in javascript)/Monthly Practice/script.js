function createUser(username, serial) {
    this.username = username;
    this.serial = serial;
}

createUser.prototype.newSerial = function () {
    return this.serial++;
}

createUser.prototype.printMe = function () {
    console.log(`Username is: ${this.username}. Serial No. is: ${this.serial}`)
}

const masud = new createUser('Masud', 1);
// masud.newSerial()
// masud.printMe()

const mahfuj = new createUser('Mahfuj', 2)
// mahfuj.newSerial()
// mahfuj.printMe()


const myHeros = ['Superman', 'Spiderman', 'Ben 10']

const heroPower = {
    spiderman: 'sling',
    superman: 'super human',
    ben10: 'Ultimatrix',
    getSpidermanPower: function () {
        console.log(`Spidy power is: ${this.spiderman}`)
    }
}

Object.prototype.masud = function () {
    console.log('Masud is presenting in all objects')
}


// myHeros.masud()
// myName.masud()
// heroPower.masud()


const myDetails = {
    name: 'Ataullah Masud',
    age: 19,
    gender: 'male'
}

const myEducations = {
    madrasha: 'fulltime',
    webdev: 'parttime',
    // __proto__: myDetails
}

// console.log(myEducations.name)

Object.setPrototypeOf(myDetails, myEducations);
// console.log(myDetails.madrasha)


const myName = 'Ataullah Masud';
String.prototype.trueLength = function () {
    console.log(this)
    console.log(`The true length is: ${this.trim().length}`)
}
myName.trueLength()
