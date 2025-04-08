const superHeros = ['batman', 'spiderman']

const herosPower = {
    spiderman: 'sling',
    batman: 'car, bike and many more',

    getSpidyPower: function () {
        console.log(`spidy power is: ${this.spiderman}`);
    }
}

Object.prototype.masud = function () {
    console.log(`Masud is present in all object`);
}

Array.prototype.heyMasud = function () {
    console.log(`Masud says hey`);
}

// superHeros.masud()
// herosPower.masud()
// superHeros.heyMasud()
// herosPower.heyMasud()
// console.log(superHeros);


const bookStore = {
    hasBooks: true
}

const bookManager = {
    isAvailable: false,
    phone: '01867060410'
}

const bookCEO = {
    fullTime: false,
    extraOrdenery: true,
    hasBook: 100000,

    __proto__: bookStore
}

// bookCEO.__proto__ = bookManager;

// Object.setPrototypeOf(bookCEO, bookManager)


const myName = '    Masud    ';

String.prototype.trueLength = function () {
    console.log(this);
    console.log(`The real length is: ${this.trim().length}`);
}

myName.trueLength()