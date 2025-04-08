const bookTicket = function (seatNo, name) {
    console.log(`${name} is booked a ticket in ${this.busName}, ticket ${this.bCode}-${seatNo}`);
    this.tickets.push({ ticketInfo: `${this.bCode}-${seatNo}`, name: name })
}

const starline = {
    busName: 'Star Line Paribahan Ltd.',
    bCode: 'SL',
    tickets: []
}
const sohagh = {
    busName: 'Sohagh Paribahan Ltd.',
    bCode: 'SH',
    tickets: []
}
const hanif = {
    busName: 'Hanif Paribahan Ltd.',
    bCode: 'HN',
    tickets: []
}

// const hanifTicket = bookTicket.bind(hanif) // line 22
// hanifTicket('C1', 'Masud') // line 23

const hanifTicket = bookTicket.bind(hanif, 'H2') 
// hanifTicket('Masud') 
// hanifTicket('Mahfuj') 
// hanifTicket('Jobaer') 

// console.log(hanif.tickets)

// bookTicket.bind(hanif, 'Mahfuj', 'C2')() // line 25
// var firstName = 'Saifullah';
// var lastName = 'Mahfuj';

const person = {
    firstName: 'Ataullah',
    lastName: 'Masud',
    display() {
        console.log(`${this.firstName} ${this.lastName}`)
    }
}
// const display = person.display;
// display.bind(person)()


// starline.busses = 120;
// starline.addBus = function () {
//     this.busses++
//     console.log(this.busses)
// }
// document
//     .querySelector('.btn')
//     .addEventListener('click', starline.addBus.bind(starline));


// Partial Application
const addTAX = (rate, value) => value + value * rate / 100;
const addVAT = addTAX.bind(null, 15)
// console.log(addVAT(100))

// const tax = function (rate) {
//     return function (value) {
//         return value + value * rate / 100;
//     }
// }
// const defaultRate = tax(15)
// console.log(defaultRate(100))