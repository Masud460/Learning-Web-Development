// synchoronous function
function a() {
    console.log('a');
}
// console.log('End');
// a();

// Asynchoronous function
function asyncJSFunction() {
    console.log('Function Working');
    let aTime = new Date().getTime();
    while(aTime + 5000 >= new Date().getTime());
    console.log('Completed');
}
// console.log('First Line');
// asyncJSFunction()
// console.log('Last Line');


// setTimeout
function setTimeoutFunc() {
    console.log('Step One Done');
    setTimeout(function(){
        console.log('Step Two Done');
    }, 5000);
    console.log('Task Completed');
}
// setTimeoutFunc()

// console.log("Hello");
// console.log("Hello2");
// setTimeout(function () {
//     console.log("Hello3");
// }, 3000)
// console.log("Hello4");
// console.log("Hello5");


// Promise
const coffee = new Promise((res, rej) => {
    if (false) {
        return res();
    } else {
        return rej();
    }
})
coffee.then(function() {
    // console.log('Resolved');
}).catch(function() {
    // console.log('Rejected');
})


const mathNum = new Promise((res, rej) => {
    let number = Math.floor(Math.random() * 10);
    if (number < 5) {
        return res();
    } else {
        return rej();
    }
})
mathNum.then(function () {
    // console.log('Below');
}).catch(function() {
    // console.log('Above');
})

const step1 = new Promise((res, rej) => {
    return setTimeout(function() {
        return res('Step Two Done');
    },5000)
})
const step2 = new Promise((res, rej) => {
    return setTimeout(function() {
        return res('Step Two Done');
    },3000)
})
Promise.all([step1, step2]).then(function(res) {
    // console.log(res);
})

Promise.race([step1, step2]).then(function(res){
    // console.log(res);
})


const promise1 = new Promise((res, rej) => {
    return res('Step One Done')
})
let promise2 = promise1.then(function(res) {
    // console.log(res);
    return new Promise((res, rej) => {
        return res('Step Two Done')
    })
})

promise2.then(function(res) {
    // console.log(res);
})

// fetch
// function randomUser() {
//     fetch(`https://randomuser.me/api/`).then(function(raw) {
//         return raw.json()
//     }).then(function(data){
//         console.log(data);
//     }).catch(function () {
//         console.error('API Data Not Found');
//     })
// }
// randomUser()

// async function myFunction () {
//     return 'Hello'
// }
// console.log(myFunction());

// function newFunc() {
//     return Promise.resolve('Hello')
// }
// console.log(newFunc());


async function randomUser() {
    let urlAPI = await fetch(`https://randomuser.me/api/`);
    let rawData = await urlAPI.json();
    console.log(rawData);
    console.log();
    console.log(`${rawData.results[0].name.title} ${rawData.results[0].name.first} ${rawData.results[0].name.last}`);
    console.log(rawData.results[0].gender);
    console.log(rawData.results[0].location.country);
}
randomUser()