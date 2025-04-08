// Booking Provider
// const bookTicket = function (name, seatNo) {
//     this.tickets.push({ticketInfo: `${this.bCode}-${seatNo}`, name: name})
//     console.log(`${name} is booked a ticket in ${this.busName}, ticket is ${this.bCode}-${seatNo}`);
// }

// // Clients
// const starline = {
//     busName: 'Star Line Paribahan Ltd.',
//     bCode: 'SL',
//     tickets: []
// }

// const sohagh = {
//     busName: 'Sohagh Paribahan Ltd.',
//     bCode: 'SH',
//     tickets: []
// }

// const hanif = {
//     busName: 'Hanif Paribahan Ltd.',
//     bCode: 'HN',
//     tickets: []
// }

// const greenline = {
//     busName: 'Green Line Paribahan Ltd.',
//     bCode: 'GL',
//     tickets: []
// }

// // bookTicket.call(starline, 'Masud', 'C1')
// // bookTicket.call(greenline, 'Meem', 'B3')
// // bookTicket.call(sohagh, 'Mahfuj', 'C2')

// // bookTicket.apply(starline, ['Mahfuj', 'C2'])
// // bookTicket.apply(greenline, ['Noman', 'C3'])
// // bookTicket.apply(greenline, ['Jubaer', 'C3'])
// // bookTicket.apply(greenline, ['Rokeya', 'C3'])
// // console.log(greenline.tickets)

// bookTicket.call(starline, 'Munim', 'A1')

// Ticket counter
const form = document.querySelector("form");
const username = document.querySelector("#name");
const seatNo = document.querySelector("#seat_no");
const destination = document.querySelector("#destination");
const time = document.querySelector("#time");
const ticketReceipt = document.querySelector(".ticket");
const usernameDisplay = document.getElementById("username");
const desDisplay = document.getElementById("user-des");
const seatDisplay = document.getElementById("user-seat");
const timeDisplay = document.getElementById("user-time");



// Ticket center
const bookTicket = function () {
  usernameDisplay.innerHTML = this.name;
  desDisplay.innerHTML = this.destination;
  seatDisplay.innerHTML = this.seat_no;
  timeDisplay.innerHTML = this.time;
  return;
};


form.addEventListener("submit", function (e) {
  e.preventDefault();
  ticketReceipt.style.display = "flex";

    // User info
let user = {
    name: username.value,
    destination: destination.value,
    seat_no: seatNo.value,
    time: time.value,
  };
    
  bookTicket.call(user);

  // usernameDisplay.innerHTML = username.value;
  // desDisplay.innerHTML = destination.value;
  // seatDisplay.innerHTML = seatNo.value;
  // timeDisplay.innerHTML = time.value;
});
