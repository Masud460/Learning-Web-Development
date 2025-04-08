// const promiseOne = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log('Async Completed');
//         resolve()
//     }, 1000)
// })
// promiseOne.then(function () {
//     console.log('Promise consumed');
// })


// new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log('Async two completed');
//         resolve()
//     }, 1000)
// }).then(function () {
//     console.log('Promise two consumed');
// })


// const promiseThree = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         resolve({username: 'Ataullah', email: 'ataullahmasud388@gmail.com'})
//     }, 1000)
// })

// promiseThree.then(function (user) {
//     console.log(user);
// })


// const promiseFour = new Promise(function (resolve, reject) {
//     let error = false;
//     setTimeout(function () {
//         if (!error) {
//             resolve({username: 'Masud', password: '123'})
//         } else {
//             reject("ERROR Something went wrong!")
//         }
//     },1000)
// })

// promiseFour.then(function (user) {
//     console.log(user);
//     return user.username
// }).then(function (username) {
//     console.log(username);
// }).catch(function (error) {
//     console.log(error);
// }).finally(() => console.log('The promise either resolved or rejected'))

const promiseFive = new Promise(function (resolve, reject) {
    let error = true;
    setTimeout(function () {
        if (!error) {
            resolve({username: 'Masud', password: '1234'})
        } else {
            reject("ERROR: Something went wrong")
        }
    }, 1000)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()

// async function getAllUser() {
//     const response = await fetch('https://randomuser.me/api/');
//     const data = await response.json();
//     console.log(data);
// }
// getAllUser()

fetch('https://randomuser.me/api/')
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);
    })
.catch((error) => console.log(error))