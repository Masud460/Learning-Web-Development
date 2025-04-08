let books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

let mainContainer = document.querySelector(".container");
let buttons = document.querySelectorAll("button");

const main = buttons.forEach((button) => {
  button.addEventListener("click", function () {
    let classList = this.classList[0];

    switch (classList) {
      case "fiction":
        books = books.filter((book) => book.genre == "Fiction");
        break;

      case "non-fiction":
        books = books.filter((book) => book.genre == "Non-Fiction");
        break;
    }
  });
});

console.log(books);

let bookShop = function () {
  let index = 0;
  while (index < books.length) {
    const newBook = document.createElement("div");
    const newTitle = document.createElement("h1");
    const newGenre = document.createElement("h3");
    const newPublish = document.createElement("h4");
    const newEdition = document.createElement("h4");
    newBook.classList.add("book");
    newTitle.classList.add("title");
    newGenre.classList.add("genre");
    newPublish.classList.add("publish");
    newEdition.classList.add("editiion");

    newTitle.textContent = books[index].title;
    newGenre.textContent = books[index].genre;
    newPublish.textContent = "Publish: " + books[index].publish;
    newEdition.textContent = "Edition: " + books[index].edition;

    mainContainer.appendChild(newBook);
    newBook.appendChild(newTitle);
    newBook.appendChild(newGenre);
    newBook.appendChild(newPublish);
    newBook.appendChild(newEdition);

    index++;
  }
};
bookShop();






















// let indexOfTitle = 0;
// title.forEach(function (ti) {
//     ti.textContent = books[indexOfTitle].title;
//     indexOfTitle++
// });

// let indexOfGenre = 0;
// genre.forEach(function (gen) {
//     gen.textContent = books[indexOfGenre].genre;
//     indexOfGenre++
// });

// let indexOfPublish = 0;
// publish.forEach(function (pub) {
//     pub.textContent = 'Publish: ' + books[indexOfPublish].publish;
//     indexOfPublish++
// });

// let indexOfEdition = 0;
// edition.forEach(function (edi) {
//     edi.textContent = 'Edition: ' + books[indexOfEdition].edition;
//     indexOfEdition++
// });

// books.

// category.addEventListener('click', function () {
//     if (category.value === 'Fiction') {
//         console.log('Fiction');
//     } else if (category.value === 'Non-Fiction') {
//         console.log('Non-Fiction');
//     }
// // })

// category.forEach(function (value) {
//     value.addEventListener('click', function () {
//         let classList = this.classLists.value;

//     })
// })
