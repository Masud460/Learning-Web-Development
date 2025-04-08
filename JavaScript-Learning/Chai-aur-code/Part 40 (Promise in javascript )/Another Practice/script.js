// const promiseOne = new Promise(function (res, rej) {
//     setTimeout(function () {
//         res('Async task one')
//     }, 1000)
// })

// promiseOne
//     .then(function () {
//         console.log('Promise one is done')
//     })

// new Promise(function (res, rej) {
//     setTimeout(function () {
//         res('Async task two done')
//     }, 1000)
// }).then(function (data) {
//     console.log('Promise two consumed')
// })

// const promiseThree = new Promise(function (res, rej) {
//     setTimeout(function () {
//         res({username: 'Masud', email: 'masud@google.com'})
//     }, 1000)
// })
// promiseThree
//     .then(function (user) {
//         console.log(user)
//     })

// const promiseFour = new Promise((res, rej) => {
//     let error = false;
//     setTimeout(function () {
//         if (!error) {
//             res('Promise resolved')
//         } else {
//             rej('Promise is rejected')
//         }
//     }, 1000)
// })
// promiseFour
//     .then(function (data) {
//         console.log(data)
//     })
//     .catch(function (error) {
//         console.error(error)
//     })
//     .finally(() => console.log('The promise either resolved or rejected'))

// const promiseFive = new Promise((res, rej) => {
//   let error = true;
//   setTimeout(function () {
//     if (!error) {
//       res("Promise resolved");
//     } else {
//       rej("Promise is rejected");
//     }
//   }, 1000);
// });

// async function consumeFive() {
//   try {
//     let response = await promiseFive;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }
// consumeFive();


// async function logUser(url) {
//     try {
//         let response = await fetch(url);
//     let data = await response.json();
//     console.log(data)
//     } catch {
//         console.error('Something went wrong')
//     }
// }
// logUser('https://randomuser.me/api/')


fetch('https://randomuser.me/api/').then(function (response) {
    return response.json()
}).then(function (data) {
    console.log(data)
}).catch(function () {
    console.error('JS wrong')
})