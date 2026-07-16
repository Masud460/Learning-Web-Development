const user = {
  username: "Masud",
  price: 499,
  welcome: function () {
    return `${this.username}, welcome to the website`;
  },
};
// console.log(user.welcome());

console.log(user.welcome());
user.username = "Jubaer";
console.log(user.welcome());