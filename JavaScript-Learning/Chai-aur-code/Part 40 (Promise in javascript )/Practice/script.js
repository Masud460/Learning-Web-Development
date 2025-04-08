const promiseOne = new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Async promise getting");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Async promise consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve();
  }, 1000);
}).then(function () {
  console.log("Promise two consumed");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Masud", password: "1234" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  let error = true;
  setTimeout(function () {
    if (!error) {
      resolve({ username: "Ataullah", password: true });
    } else {
      reject("ERROR: Something Went Wrong");
    }
  }, 1000);
});

promiseFour
  .then(function (user) {
    console.log(user);
  })
  .catch(function (error) {
    console.log(error);
  })
    .finally(function () {
      console.log('The promise completed either resolved or rejected');
  })


const promiseFive = new Promise(function (resolve, reject) {
    const error = true;
    setTimeout(function () {
        if (!error) {
            resolve('The promise resolved')
        } else {
            reject('The promise rejected')
        }
    },1000)
})

async function consumePromiseFive() {
    try {
        let response = await promiseFive
    console.log(data);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()


async function getAllUser() {
    const response = await fetch('https://randomuser.me/api/')
    const data = await response.json();
    console.log(data);
}
// getAllUser()

fetch('https://randomuser.me/api/')
    .then(function (response) {
    return response.json()
    }).then(function (data) {
    console.log(data);
    }).catch(function (error) {
    console.log(error);
})