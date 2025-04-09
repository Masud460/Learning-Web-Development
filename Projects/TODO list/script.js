const container = document.querySelector('.container');

// Dark and White Control
const darkAndWhite = document.querySelector('.icon_dark')
const body = document.body;
const checkbox = document.querySelectorAll('.square_checkbox');
const placeholder = document.querySelector('::placeholder')

const head = document.querySelector('.head');
const searchNote = document.querySelector('input[type="search"]');

darkAndWhite.addEventListener('click', () => {
    head.style.color = '#fff';

    searchNote.style.borderColor = '#fff';
    searchNote.style.backgroundColor = 'transparent';
    searchNote.style.color = '#fff';
    searchNote.style.setProperty('::placeholder', 'color: red; font-style: italic;');
    checkbox.forEach(box => box.style.color = '#fff');
    body.style.backgroundColor = '#252525';
})