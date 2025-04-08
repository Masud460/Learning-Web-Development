const myArr = [1, 3, 5, 6]
const myFavBooks = ['Hedayatunnahu', 'Gulista', 'Elmussiga']

const myAnotherArr = new Array('Hello', 'Hi', 'How are you?')

// Add an element to the last of array
myArr.push(7)
// Remove an element from the last of array
myArr.pop()
// Add an element to the first of array
myArr.unshift(9)
// Remove an element from the first of array
myArr.shift()

// Check if a part of an element has or not
// console.log(myArr.includes(9))
// Check index number of an element
// console.log(myArr.indexOf(1))
// console.log(myArr.indexOf(11))// returns -1 because it dosen't have the value

// Join an array in a string format
const newArr = myArr.join()

// console.log(typeof myArr)
// console.log(typeof newArr)

const nums = [0, 1, 2, 3, 4]
console.log('A' ,nums)

const numsTwo = nums.slice(1, 3)
console.log(numsTwo)
console.log('B' ,nums)

const numsThree = nums.splice(1, 3)
console.log(numsThree)
console.log('C' ,nums)