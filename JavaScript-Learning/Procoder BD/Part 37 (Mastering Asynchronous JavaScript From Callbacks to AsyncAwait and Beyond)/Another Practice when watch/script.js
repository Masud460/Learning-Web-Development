// function a() {
//     console.log('a')
// }
// console.log('End')
// a()
/*
console.log('First')
console.log('Second')
setTimeout(function () {
    console.log('Third')
}, 0)
console.log('Fourth')
console.log('Fifth')
*/

// let buyBook = new Promise(function (res, rej) {
//     if (true) {
//         return res()
//     } else {
//         return rej()
//     }
// })
// buyBook
//     .then(function () {
//         console.log('You have bougth a book')
//     })
//     .catch(function () {
//         console.log('You have not bougth any book')
//     })

/*
const math = new Promise((res, rej) => {
    let n = Math.floor(Math.random() * 10);
    if (n < 5) {
        return res()
    } else {
        return rej()
    }
})

math
    .then(function () {
        console.log('Bellow')
    })
    .catch(function () {
        console.log('Above')
    })
*/

// const step1 = new Promise((res, rej) => {
//     setTimeout(function () {
//         res('Step One is done')
//     }, 2000)
// })

// const step2 = new Promise((res, rej) => {
//     setTimeout(function () {
//         res('Step Two is done')
//     }, 3000)
// })

// step1
//     .then(function (res) {
//         console.log(res)
//     })

// step2
//     .then(function (res) {
//         console.log(res)
//     })

// Promise.all([step1, step2])
//     .then(function (res) {
//         console.log(res)
//     })

// Promise.race([step1, step2])
//     .then(function (res) {
//         console.log(res)
//     })

// Promise chaining
/*
let promiseOne = new Promise((res, rej) => {
    setTimeout(function () {
        res('Cut the woods')
    }, 5000)
})

const promiseTwo = promiseOne.then(function (data) {
    console.log(data)
    return new Promise(function (res, rej) {
        setTimeout(function () {
            res('Collect the pins')
        }, 3000)
    })
})
const promiseThree = promiseTwo
    .then((data) => {
        console.log(data)
        return new Promise(function (res, rej) {
            setTimeout(function () {
                res('Make a table')
            }, 2000)
        })
    })

promiseThree
    .then(function (data) {
        console.log(data)
    })
*/

// Synchronous way
/*
function randomUser(url) {
    fetch(url)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data)
        })
        .catch(() => console.log('No Data found'))
}
randomUser('https://randomuser.me/api/')
*/

// Asynchronous way
async function randomUser(url) {
    try {
        
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
  } catch {
    console.log("Data not found");
  }
}

randomUser("https://randomuser.me/api/");
