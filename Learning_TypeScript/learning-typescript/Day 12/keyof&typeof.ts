interface User {
  name: string;
  id: number;
  email: string;
}

// ! I didn't understood it.
type Keys = keyof User; // "name" | "id" | "email"

// const user: User = {
//     name: 'USER',
//     id: 345,
//     email: 'example@gmail.com',
// }


function printKey<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key]
}

// ! Why don't we declare the types in the following codeline?
// console.log(printKey(user, 'name'));


// typeof
const masud = {
    name: "Masud",
    id: 234,
    email: 'masud234@gmail.com',
}

type NewUser = typeof masud;

const jobaer: NewUser = {
    name: 'Jobaer',
    id: 978,
    email: 'jobaer345@gmail.com',
}

console.log(jobaer);