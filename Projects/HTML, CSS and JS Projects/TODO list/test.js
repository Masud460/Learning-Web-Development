let str = 'Ataullah Masud';
const converted = str.split('');
// for (word of converted) {
//     if (word.length > 6) {
//         console.log(word);
//     }
// }

let some = str.some(text => {
    converted.includes(text)
})
console.log(some);