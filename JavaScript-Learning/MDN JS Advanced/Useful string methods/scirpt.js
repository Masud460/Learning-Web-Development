const myName = 'Ataullah Masud';

// To know the length of string
console.log(myName.length)

// Retriving specific charecter
console.log(myName[5])

// Last charecter finding technique
console.log(myName[myName.length - 1])

// Testing if a string contains a substring
console.log(myName.includes('Masud'))

// Check if a string starts with a specific character
console.log(myName.startsWith('A'))

// Check if a string ends with a specific character
console.log(myName.endsWith('d'))

// Finding the position of a substring in a string
console.log(myName.indexOf('Masud'))

// Extracting a substring from a string
console.log(myName.slice(0, 8)) // Ataullah

// Changing case
console.log(myName.toUpperCase())
console.log(myName.toLowerCase())

// Updating first parts of a string
console.log(myName.replace('Ataullah', 'Abdullah'))

// Updating all parts of a string
console.log(myName.replaceAll('l', '(l)'))

