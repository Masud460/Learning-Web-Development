const ticketBooking = function (seatNo, name) {
  console.log(
    `${name} is booked a ticket in ${this.busName}, ticket ${this.bCode}-${seatNo}`
  );
  this.tickets.push({ ticketInfo: `${this.bCode}-${seatNo}`, name: name });
};

const starline = {
  busName: "Star Line Special LTD.",
  bCode: "SL",
  tickets: [],
};
const greenline = {
  busName: "Green Line Special LTD.",
  bCode: "GL",
  tickets: [],
};
const hanif = {
  busName: "Hanif Special LTD.",
  bCode: "HN",
  tickets: [],
};

const greenlineTicket = ticketBooking.bind(greenline);
const greenlineTicketG1 = ticketBooking.bind(greenline, "G1");
// greenlineTicket('C2', 'Masud')
// greenlineTicket('C1', 'Noman')
// greenlineTicketG1('Mahmud')
// greenlineTicketG1('Maksud')
// ticketBooking.bind(greenline)('G2', 'Jubaer')
// ticketBooking.bind(greenline, 'G2', 'Jubaer')()

const person = {
  firstName: "Ataullah",
  lastName: "Masud",
  display() {
    console.log(`${this.firstName} ${this.lastName}`);
  },
};
const display = person.display.bind(person);
// person.display.call(person);
// person.display.apply(person);
// display();


// const addBusBtn = document.getElementById('btn');

starline.busses = 50;
// starline.addBus = function () {
//     console.log(this)
//     this.busses++;
//     console.log(this.busses)
// }

// addBusBtn.addEventListener('click', starline.addBus.bind(starline))
// addBusBtn.addEventListener('click', function () {
//     console.log(this)
//     this.busses++;
//     console.log(this.busses)
// }.bind(starline))


const addTAX = (rate, value) => value + value * rate / 100;
// console.log(addTAX(15, 20))
// const addVAT = addTAX.bind(null, 10)
const addVAT = addTAX.bind(undefined, 10)
console.log(addVAT(20))