function a() {
  console.log("a");
}
// console.log('End')
// a()

function a() {
  console.log("Working!...");
  let aTime = new Date().getTime();
  while (aTime + 5000 >= new Date().getTime());
  console.log("Completed");
}
// console.log('Start')
// a()
// console.log('End')

// console.log("Hello 1");
// console.log("Hello 2");
// setTimeout(function () {
//   console.log("Hello 3");
// }, 2000);
// console.log("Hello 4");
// console.log("Hello 5");

// const myPromise = new Promise(function (res, rej) {
//     let num = Math.floor(Math.random() * 10);
//     if (num > 5) {
//         res('Above')
//     } else {
//         rej('Below')
//     }
// })
// myPromise.then(function (result) {
//     console.log(result)
// }).catch(function (result) {
//     console.log(result)
// })

// const coffee = new Promise((res, rej) => {
//     let promise = false;
//     if (promise) {
//         res('i am from coffee')
//     } else {
//         rej('i am also from coffee')
//     }
// })

// Promise.all([myPromise, coffee]).then(function (data) {
//     console.log(data, 'Resolved')
// }).catch(function (data) {
//     console.log(data, 'Rejected')
// })

// Promise.race([myPromise, coffee]).then(function (data) {
//     console.log(data, 'Resolved')
// }).catch(function (data) {
//     console.log(data, 'Rejected')
// })

// const promiseOne = new Promise((res, rej) => {
//     let error = false;
//     if (!error) {
//         res('Promise one Resolved')
//     } else {
//         rej('Promise one Rejected')
//     }
// })

// const promiseTwo = promiseOne
//     .then(function (data) {
//         console.log(data)
//         return new Promise((res, rej) => {
//             setTimeout(function () {
//                 res('Promise two resolved')
//             }, 1000)
//         })
//     })
//     .catch(function (data) {
//         console.log(data)
//         return new Promise((res, rej) => {
//             setTimeout(function () {
//                 res('Promise two resolved')
//             }, 1000)
//         })
//     })

// const promiseThree = promiseTwo
//     .then(function (data) {
//         console.log(data)
//         return new Promise((res, rej) => {
//             setTimeout(function () {
//                 res('Promise three resolved')
//             }, 1000)
//         })
//     })

// promiseThree
//     .then(function (data) {
//         console.log(data)
//     })

function randomUser(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch(function () {
      console.log("Something went wrong");
    });
}
// randomUser('https://randomuser.me/api/')

// async function myFunction () {
//     return 'Hello'
// }
// console.log(myFunction())
// function myFunction () {
//     return Promise.resolve('Hello')
// }
// console.log(myFunction())

async function randomUser(url) {
  try {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
  } catch {
    console.error("Something went wrong!");
  }
}
randomUser("https://randomuser.me/api/");
