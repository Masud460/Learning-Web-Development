const userDetails = {
    name: {
        username: {
            title: 'MD: ',
            first: 'Ataullah ',
            last: 'Masud'
        },
        "user mother's name": {
            title: 'Ms: ',
            first: 'Mohsena ',
            last: 'Begom'
        },
        "user father's name": {
            title: 'Mawlana ',
            first: 'Jainul',
            last: 'Abedeen'
        }
    }
}

// console.log(userDetails.name.username.title)
// console.log(userDetails.name.username.first)
// console.log(userDetails.name.username.last)

// console.log(userDetails.name["user mother's name"].title)
// console.log(userDetails.name["user mother's name"].first)
// console.log(userDetails.name["user mother's name"].last)

// console.log(userDetails.name["user father's name"].title)
// console.log(userDetails.name["user father's name"].first)
// console.log(userDetails.name["user father's name"].last)


// console.log(userDetails.name?.sister?.title)

const obj1 = {a: 1, b: 2}
const obj2 = {c: 3, d: 4}
// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}
// console.log(obj3)

// console.log(Object.keys(userDetails))
// console.log(Object.values(userDetails))

// console.log(Object.entries(userDetails))
console.log(userDetails.hasOwnProperty('name'))