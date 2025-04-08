function calculateCartPrice(...prices) {
    return prices;
}
// console.log(calculateCartPrice(2000, 6000, 3000))

const student = {
    name: 'Masud',
    roll: '01',
    id: 1044,
    class: 'Hedayatunnahu'
}

function displayResult(studentData) {
    return `The student name is: ${studentData.name}, and roll no. is: ${studentData.roll}, and id is: ${studentData.id}, and the class is: ${studentData.class}`
}

// console.log(displayResult(student))



const bookList = ['Hedayatunnahu', 'Nahumeer', 'Mizan', 'Elmussaraf'];

function getFreeBookBySpin(book) {
    let random = Math.floor(Math.random() * bookList.length);
    return book[random];
};

console.log(getFreeBookBySpin(bookList))