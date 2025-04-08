const user = {
    name: 'Masud',
    email: 'masud@google.com',
    password: '1234',

    displayName: function () {
        return this.name
    }
}
// Object.defineProperty(user, 'name', {
//     writable: false
// })
// user.name = 'Mahfuj'
// console.log(Object.getOwnPropertyDescriptor(user, 'name'))
Object.defineProperty(user, 'name', {enumerable: false})

for (let [key, value] of Object.entries(user)) {
    if (typeof value !== 'function') {
        console.log(key, ':', value);
    }
}