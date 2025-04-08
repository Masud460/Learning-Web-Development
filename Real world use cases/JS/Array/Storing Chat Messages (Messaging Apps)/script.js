// let messages = [
//     { sender: "Alice", text: "Hey!" },
//     { sender: "Bob", text: "Hello!" }
// ];
// messages.push({ sender: "Alice", text: "How are you?"});

// References
const submit = document.querySelectorAll('input[type="submit"]');
const senderOne = document.querySelector('#sender_one')
const senderTwo = document.querySelector('#sender_two');
const form = document.querySelectorAll('form')


// Message Storage
let messages = [];



function messageReport(sender, text) {
    let obj = {};
    obj.sender = sender;
    obj.text = text;

    return obj;
}



submit.forEach(function (sub) {
    sub.addEventListener('click', function (e) {
        e.preventDefault()
        let userInput = e.target.parentElement.querySelector('input:first-child').value;
        let username;
        if (e.target.parentElement.parentElement.id == 'sender_one') {
            username = 'Sender one'
        } else {
            username = 'Sender two'
        }
        messages.push(messageReport(username, userInput));
        console.log(messages)
    })
})