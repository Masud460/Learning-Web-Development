// References
const submit = document.querySelector('input[type="submit"]');
// const form = document.querySelector('form');

// Memory
let userData = [];

// Main area
submit.addEventListener('click', function (e) {
    e.preventDefault()

    // user details
    let username = e.target.form[0].value;
    let email = e.target.form[1].value;
    let password = e.target.form[2].value;

    function userDetails(username, email, password) {
        let obj = {};
        obj.username = username;
        obj.email = email;
        obj.password = password;

        return obj;
    }

    userData.push(userDetails(username, email, password))

    console.log(userData)

    username = '';
    email = '';
    password = '';

})