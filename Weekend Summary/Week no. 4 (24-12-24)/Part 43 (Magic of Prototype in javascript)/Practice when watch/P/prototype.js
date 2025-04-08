// Object.prototype.trueLength = function () {
//     return this.trim().length
// }
const myName = 'Masud      ';
const myHobbi = 'chai      ';
// console.log(myHobbi.trueLength());
// console.log(myName.trueLength());



let myHeros = ['Spiderman', 'thor']

const heroPower = {
    thor: 'hammer',
    spiderman: 'sling',

    getSpiderPower: function () {
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.masud = function () {
    console.log(`masud is present in all object`);
}

Array.prototype.heyMasud = function () {
    console.log(`Masud says hello`);
}

// heroPower.masud()
// myHeros.masud()

// myHeros.heyMasud()
// heroPower.heyMasud() // not works

const user = {
    name: 'Masud',
    email: 'masud@google.com'
}

const teacher = {
    makeVideo: true
}
teacher.__proto__ = user;



const teachingAssistent = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: teachingAssistent
}


// modern syntax

Object.setPrototypeOf(teacher, teachingAssistent)


const myRealName = 'Ataullah     ';

String.prototype.trueLength = function () {
    console.log(`${this}`)
    console.log(`The true length is: ${this.trim().length}`)
}

myRealName.trueLength()
'Hello World!'.trueLength()
'Hey you!'.trueLength()