// const promiseOne = new Promise((resolve, reject) => {
//     setTimeout(function () {
//         resolve()
//     }, 1000)
// })

// promiseOne.then(function () {
//     console.log('Async task done')
// })

// new Promise(function (res, rej) {
//     setTimeout(function () {
//         res()
//     }, 1000)
// }).then(function () {
//     console.log('Async task two done')
// })

// const promiseThree = new Promise(function (res, rej) {
//     setTimeout(function () {
//         res('Promise three done')
//     }, 1000)
// })
// promiseThree.then(function (data) {
//     console.log('Incoming data from Promise ' + data)
// })

// const promiseFour = new Promise(function (res, rej) {
//     if (true) {
//         res('Promise resolved')
//     } else {
//         rej('Promise rejected')
//     }
// })
// promiseFour
//     .then(function (data) {
//     console.log(data)
//     })
//     .catch(function (data) {
//     console.log(data)
//     })
//     .finally(function () {
//         console.log('Finally the promise end')
//     })


// const promiseFive = new Promise(function(res, rej){
//     let error = false;
//     setTimeout(function () {
//         if (!error) {
//             res('Promise five consumed')
//         } else {
//             rej('ERROR! Something went wrong')
//         }
//     }, 1000)
// })

// async function consumePromiseFive() {
//     try {
//         let response = await promiseFive;
//         console.log(response)
//     } catch (error) {
//         console.log(error)
//     }
// }
// consumePromiseFive()


const apiURL = 'https://randomuser.me/api/';
// async function randomUser() {
//     fetch(apiURL).then(function (data) {
//         return data.json()
//     }).then(function (data) {
//         console.log(data.results[0].name.title)
//         console.log(data.results[0].name.first)
//         console.log(data.results[0].name.last)
//     }).catch(function () {
//         console.error('Something went wrong')
//     })
// }
// randomUser()

// async function getUsers() {
//     let collectFromAPI = await fetch(apiURL);
//     let data = await collectFromAPI.json();
//     console.log(data.results[0].name.title)
//     console.log(data.results[0].name.first)
//     console.log(data.results[0].name.last)
// }
// getUsers()


fetch(apiURL)
    .then(collectDataFromAPI => {
        return collectDataFromAPI.json()
    })
    .then(data => {
        console.log(data.results[0].name.title);
        console.log(data.results[0].name.first);
        console.log(data.results[0].name.last);
    })
    .catch(() => {
        console.error('Something went wrong')
    })