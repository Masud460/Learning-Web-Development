const ticketBooker = function (seatNo, name) {
    console.log(`${name} is booked a ticket in ${this.busName}, ticket ${this.bCode}-${seatNo}`);
    this.tickets.push({ticketInfo: `${this.bCode}-${seatNo}`, name: name})
}

const starline = {
    busName: 'Star Line Special Ltd.',
    bCode: 'SL',
    tickets: []
}
const greenline = {
    busName: 'Green Line Paribahan Ltd.',
    bCode: 'GL',
    tickets: []
}
const hanif = {
    busName: 'Hanif Paribahan Ltd.',
    bCode: 'HN',
    tickets: []
}
const sohagh = {
    busName: 'Sohagh Paribahan Ltd.',
    bCode: 'SH',
    tickets: []
}


// ticketBooker.call(starline, 'B2', 'Masud')
// ticketBooker.call(starline, 'A1', 'Masud')
// ticketBooker.call(hanif, 'H3', 'Mahfuj')

// console.log(starline.tickets)

ticketBooker.apply(sohagh, ['G2', 'Noman'])
ticketBooker.apply(greenline, ['D1', 'Meem'])