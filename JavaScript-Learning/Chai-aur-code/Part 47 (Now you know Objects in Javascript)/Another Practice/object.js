const user = {
  name: "Masud",
  age: 19,
  gender: "male",

  getBook: function () {
    return `${this.name} got a book`;
  },
};
Object.defineProperty(user, "name", {
    writable: false,
    enumerable: false
});


for (const [key, value] of Object.entries(user)) {
  if (typeof value != "function") {
    console.log(key + " : " + value);
  }
}

// console.log(Object.getOwnPropertyDescriptor(Math, 'PI'))
