const quote = document.getElementById('quote');
const author = document.getElementById('author');
const button = document.getElementById('button');
const urlAPI = 'https://api.api-ninjas.com/v1/quotes?category=happiness';
const keyAPI = 'CYGNvntZTFTK5p4dBIfiow==VVhY12Kn7iCCF8a2';

const getQuote = () => {
    fetch(urlAPI, {
        headers: { 'X-Api-Key': keyAPI}
    }).then(data => data.json()).then(item => {
        quote.textContent = item[0].quote;
        author.textContent = item[0].author;
        console.log(item[0]);
    })
}
getQuote()
button.addEventListener('click', getQuote)