const quoteElement = document.querySelector("#quote");
const authorElement = document.querySelector("#author");
const button = document.querySelector("#button");

const urlAPI = 'https://api.api-ninjas.com/v1/quotes?category=food';
const keyAPI = 'CYGNvntZTFTK5p4dBIfiow==VVhY12Kn7iCCF8a2';

const getQuote = () => {
    fetch(urlAPI, {
        headers: { 'X-Api-Key': keyAPI}
    }).then(data => data.json()).then(item => {
        quoteElement.textContent = item[0].quote;
        authorElement.textContent = item[0].author;
    })
}
getQuote()
button.addEventListener('click', getQuote)