const hidayatunnahu = ['hidayatunnahu', 'Nurulijah', 'Elmussiga'];
const nahvemeer = ['Nahvemeer', 'Elmussorof', 'Sorhe Miate Amel'];

// hidayatunnahu.push(nahvemeer)


const allKitab = hidayatunnahu.concat(nahvemeer);
const all_new_kitab = [...hidayatunnahu, ...nahvemeer]
// console.log(all_new_kitab)

const nums = [1, 2, 3, [4, 5, 6], 7, [8, [9, 0]]]
const nums_in_one = nums.flat(Infinity)
// console.log(Array.isArray(nums))
// console.log(Array.from(nums))
console.log(Array.from({name: 'Masud'}))    // Interesting


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3))