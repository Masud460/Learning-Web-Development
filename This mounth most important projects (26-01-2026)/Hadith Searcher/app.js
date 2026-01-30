const container = document.querySelector(".container");

// ! Card Area
const cardArea = document.querySelector(".card-area");
const hadithChapter = document.getElementById("chapter-name");
const hadithNumber = document.getElementById("hadith-no");

const hadithMainText = document.querySelector(".main-hadith");
const translatedHadith = document.querySelector(".translated-hadith");

const searchOptionEnable = document.querySelector(".search-hadith");

// ! Search Area
const searchArea = document.querySelector(".search-area");
const userInput = document.getElementById("search");
const submitBtn = document.querySelector(".submit-btn");


// * Enable Search Area
searchOptionEnable.addEventListener('click', function () {
    console.log('Here it is');
    cardArea.style.display = 'none';
    searchArea.style.display = 'block';
})