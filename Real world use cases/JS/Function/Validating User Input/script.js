// References
// const submit = document.querySelector('input[type="submit"]');
const form = document.querySelector("form");

// Memory
let userData = [];

// Main area
form.addEventListener("submit", function (e) {
  e.preventDefault();

  // user details
  console.log(e);
    let username;
    let email = e.target[1].value;
  let password;

  function usernameCheck(data) {
    return data.split("").length > 5;
  }
  function passwordCheck(data) {
    return data.includes("@") && data.includes("#") && data.includes("A");
  }

  if (usernameCheck(e.target[0].value)) {
    username = e.target[0].value;
  } else {
    console.error("Something went wrong");
  }

  if (passwordCheck(e.target[2].value)) {
    password = e.target[2].value;
  } else {
    console.error("Something went wrong");
  }

  function userDetails(username, email, password) {
    let obj = {};
    obj.username = username;
    obj.email = email;
    obj.password = password;

    return obj;
  }

  console.log(userData);

  userData.push(userDetails(username, email, password));

  username = "";
  email = "";
  password = "";
});
