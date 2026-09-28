const user = {
    name: 'Ataullah',
    address: {
        city: 'Dhaka',
        district: 'Dhaka'
    }
}

const userCopy = { ...user }

userCopy.name = 'Masud'
userCopy.address.city = 'Maniknagar'

console.log(user)   
console.log(userCopy);