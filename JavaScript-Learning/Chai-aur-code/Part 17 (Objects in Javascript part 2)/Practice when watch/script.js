const userData = {
    email: 'masud@google.com',
    name: {
        fullName: {
            userFullName: {
                firstName: 'Ataullah',
                lastName: 'Masud'
            }
        }
    }
}

// console.log(userData.name.fullName.userFullName.firstName)

const userOne = {
    name: {
        title: 'MD: ',
        first: 'Ataullah ',
        last: 'Masud '
    },
    address: {
        city: 'Dhaka',
        houseNo: '57/1'
    }
}

// console.log(userOne?.address?.city) // ✅ Returns 'Dhaka'
// console.log(userOne?.address?.street) // ✅ Returns undefined not throw error

// const obj1 = {a: 1, b: 2}
// const obj2 = {c: 3, d: 4}
// const obj3 = Object.assign({}, obj1, obj2);

// const obj3 = {...obj1, ...obj2}
// console.log(obj3)


// console.log(Object.keys(userOne))
// console.log(Object.values(userOne))

// console.log(Object.entries(obj3))
// console.log(obj3.hasOwnProperty('a'))


