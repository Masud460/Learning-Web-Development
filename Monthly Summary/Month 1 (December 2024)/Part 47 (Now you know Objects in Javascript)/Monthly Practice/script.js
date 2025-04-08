const user = {
    name: 'Masud',
    password: 'masud388',
    DOB: '01-03-2005',
    showNameInUpper: function () {
        console.log(this.name.toUpperCase())
    }
}


// Object.defineProperty(user, 'DOB', {
//     writable: false,
//     enumerable: false,
//     configurable: false
// })
// user.DOB = '03-03-2005' // This will not work
// console.log(Object.getOwnPropertyDescriptor(user, 'DOB'))

Object.defineProperty(user, 'name', {
    enumerable: false
})


for (const [key, value] of Object.entries(user)) {
    if (typeof value !== 'function') {
        console.log(key + ' : ' + value)
    }
}

