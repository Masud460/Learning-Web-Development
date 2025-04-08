const prom = new Promise(function (resolve, reject) {
  setTimeout(function () {
    // console.log('Async task completed')
    resolve();
  }, 1000);
});

// prom.then(function () {
//     console.log('Promise consumed')
// })

// new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log('Async tast two completed')
//         resolve()
//     }, 1000)
// }).then(function () {
//     console.log('Promise two consumed')
// })

// new Promise(function (resolve, reject) {
//     resolve('Promise is consumed')
// }).then(function (data) {
//     console.log(data)
// })

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Masud", email: "masud@gmail.com" });
  }, 1000);
});

// promiseThree.then(function (user) {
//     console.log(user)
// })

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "Masud", password: "2354" });
    } else {
      reject("ERROR: SOMETHING WENT WRONG!");
    }
  }, 1000);
});

// promiseFour
//   .then((user) => {
//     console.log(user);
//     return user.username;
//   })
//   .then((username) => {
//     console.log(username);
//   })
//     .catch((error) => console.error(error))
//     .finally(() => {
//       console.log('The promise is either resolved or rejected')
//   })

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "JS", password: "2354" });
    } else {
      reject("ERROR: JS WENT WRONG!");
    }
  }, 1000);
});

async function promFiveExcute() {
  try {
    let response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
promFiveExcute();


async function getUsers() {
    try {
        const response = await fetch('https://randomuser.me/api/');
        const data = await response.json();
        // const {results: [{name: {title, first, last}}]} = data
        // console.log(data.results[0].name.title)
        // console.log(data.results[0].name.first)
        // console.log(data.results[0].name.last)
        // console.log(title, first, last)
        console.log(data)
    } catch (error) {
        console.log(error)
    }
    
}
// getUsers()

fetch('https://randomuser.me/api/')
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data)
    })
    .catch(function (error) {
        console.error(error)
    })