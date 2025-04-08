const nums = [1, 2, 3, 4, 5];
for (let i = 0; i < nums.length; i++){
    // console.log(nums[i])
}

const myName = 'Masud';
for (let i = 0; i < myName.length; i++){
    // console.log(`Each char is: ${myName[i]}`)
}

const myMap = new Map();
myMap.set('01', 'Hedayatunnahu')
myMap.set('02', 'Nurul Izah')
myMap.set('03', 'Elmus siga')
// console.log(myMap)

for (const [key, value] in myMap) {
    // console.log(key + ' : ' + value)
    // console.log(key, value)
}

const user = {
    name: 'Masud',
    age: 18,
    isAvilable: false
}

// for (let key in user){
//     console.log(key, ':', user[key])
// }
for (let [key, value] of Object.entries(user)){
    // console.log(key, ':', value)
}

for (let num in nums) {
    // console.log(nums[num])
}


// nums.forEach(function (num) {
//     // console.log(num)
// })

function callback(num) {
    console.log(num)
}
// nums.forEach(callback)

const booksDetails = [
    {
        name: 'Hedayatunnahu',
        writer: 'Unknown'
    },
    {
        name: 'Nurul Izah',
        writer: 'As saikh surumbulali'
    },
    {
        name: 'Elmus siga',
        writer: 'Enayet ahmad'
    },
]

booksDetails.forEach(function (book) {
    console.log(`Book name is: ${book.name}, Book writer's name is: ${book.writer}`)
})