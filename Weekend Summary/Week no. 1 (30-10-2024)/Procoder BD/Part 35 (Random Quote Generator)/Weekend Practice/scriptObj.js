const randomQuotes = [
  {
    quote: "Quality is not an act, it is a habit",
    author: "Masud",
  },

  {
    quote:
      "Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy.",
    author: "Ataullah",
  },

  {
    quote: "Life is 10% what happens to you and 90% how you react to it.",
    author: "Noman",
  },

  {
    quote: "If you are going through hell, keep going.",
    author: "Abdullah",
  },

  {
    quote:
      "Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.",
    author: "Saifullah",
  },

  {
    quote: "With the new day comes new strength and new thoughts.",
    author: "Jubaer",
  },
];

const quote = document.getElementById("quote");
const author = document.getElementById("author");
const button = document.getElementById("button");

function autoQuote() {
    let quoteIndex = Math.floor(Math.random() * randomQuotes.length);
    quote.textContent = randomQuotes[quoteIndex].quote;
    author.textContent = randomQuotes[quoteIndex].author;
}
autoQuote()

button.addEventListener('click', autoQuote);