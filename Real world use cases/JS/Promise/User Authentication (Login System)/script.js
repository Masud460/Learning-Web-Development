// References
const submit = document.querySelector('input[type="submit"]');
const message = document.querySelector('#message')

// Memory
let userData = [
  {
    email: 'masud@google.com',
    password: 'masud388'
  },
  {
    email: 'mahfuj@google.com',
    password: 'mahfuj110'
  }
];





submit.addEventListener('click', function (e) {
    e.preventDefault()

    let userEmail = e.target.form[0].value;
    let userPassword = e.target.form[1].value;
    
  let dataBaseEmail = userData.map(user => user.email);
  let dataBasePS = userData.map(user => user.password);

  const loginManager = new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (dataBaseEmail.includes(userEmail) && dataBasePS.includes(userPassword)) {
        resolve('Login successful')
      } else {
        reject('ERROR: incorrect email or password')
      }
    } , 1000)
  })
  
  loginManager
    .then(function (msg) {
      message.textContent = msg;
    })
    .catch(function (error) {
      message.textContent = error;
    })

  
})