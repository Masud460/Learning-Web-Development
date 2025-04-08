const marvel_heros = ['Ironman', 'Spiderman', 'Batman']
const dc_heros = ['Superman', 'Thor'];

// const all_heros = marvel_heros.concat(dc_heros)
const all_heros = [...marvel_heros, ...dc_heros]
// console.log(all_heros)

const nums = [1, 2, [3, 4], 5, [6, [7, 8]], 9];
const in_one_array = nums.flat(Infinity)
// console.log(in_one_array)

// console.log(Array.isArray(in_one_array))
// console.log(Array.from('Ataullah Masud'))
// console.log(Array.from({username: 'Masud'}))

console.log(Array.of(1, 3, 6))