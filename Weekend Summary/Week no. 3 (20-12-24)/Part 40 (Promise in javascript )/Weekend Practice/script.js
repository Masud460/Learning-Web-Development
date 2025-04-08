const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async Promise");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise one consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async two completed");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Promise two consumed");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Masud", email: "ataullahmasud388@gmail.com" });
  }, 1000);
});

promiseThree
  .then(function (user) {
    return user.username;
  })
  .then(function (username) {
    console.log(username);
  });

const promiseFour = new Promise(function (resolve, reject) {
  const error = true;
  setTimeout(function () {
    if (!error) {
      resolve({ langName: "JavaScript", fileName: "js" });
    } else {
      reject("ERROR: SOMETHING WENT WRONG");
    }
  }, 1000);
});

promiseFour
  .then(function (data) {
    return data.langName;
  })
  .then(function (fileName) {
    console.log(fileName);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() =>
    console.log("The promise completed either resolved or rejected")
  );

const promiseFive = new Promise(function (resolve, reject) {
  const error = true;
  setTimeout(function () {
    if (!error) {
      resolve({ langName: "JavaScript", fileName: "js" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive();


async function getAllUser() {
    const response = await fetch('https://randomuser.me/api/')
    const data = await response.json()
    console.log(data);
}
// getAllUser()


fetch('https://randomuser.me/api/').then(function (response) {
    return response.json()
}).then(function (data) {
    console.log(data);
})
    .catch(function () {
    console.log('ERROR: Something went wrong');
})