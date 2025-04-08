// Sign up
const username = 'Ataullah Masud';
const email = 'ataullahmasud88@gmail.com';
const password = 'masud388';

// randoms
const days = ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const date = Math.floor(Math.random() * 31) + 1;
const hour = Math.floor(Math.random() * 12) + 1;
const minute = Math.floor(Math.random() * 60);
const ampm = ['AM', 'PM'];

// Seted by server
const travelTime = `${date} ${month[Math.floor(Math.random() * 11)]} (${days[Math.floor(Math.random() * 6)]}), ${hour}:${minute} ${ampm[Math.floor(Math.random() * 1)]}`;
const price = [450, 500, 700]


// User Details saved on server
function user(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}


// Ticket buying on a button click
function buyTicket(username, email, password, travelTime, price) {
    user.call(this, username, email, password)
    this.travelTime = travelTime;
    this.price = price;
}

// Ticket details setting
const buyer = new buyTicket(username, email, password, travelTime, price[Math.floor(Math.random() * 2)])
console.log(buyer)