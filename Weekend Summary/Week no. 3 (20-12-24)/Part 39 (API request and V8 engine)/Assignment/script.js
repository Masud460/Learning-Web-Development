const body = document.querySelector("body");

// Make button
const btn = document.createElement("button");
btn.innerHTML = "Get Data";
body.appendChild(btn);

// Make card
const div = document.createElement("div");
const img = document.createElement("img");
const follower = document.createElement("h3");

// Append the card
div.appendChild(img);
div.appendChild(follower);
body.appendChild(div);

// XMLHttpRequest

function incommingData() {
  const requestURL = "https://api.github.com/users/hiteshchoudhary";
  const xhr = new XMLHttpRequest();
  xhr.open("GET", requestURL);
  xhr.send();
  xhr.onreadystatechange = function () {
    console.log(this.readyState);
    if (this.readyState === 4) {
      const data = JSON.parse(this.responseText);
      console.log(data.followers);
      img.src = data.avatar_url;
      follower.innerHTML = "Followers : " + data.followers;
    }
  };
  div.style.display = "flex";
  btn.style.display = "none";
}

// Handle the click event
btn.addEventListener("click", incommingData);
