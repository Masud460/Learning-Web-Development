type User = {
    name: string;
    email: string;
    id: number;
}

/// Custom Partial

// type PartialMaker<T> = {
//     [K in keyof T]?: T[K]
// }

// type OptionalUser = PartialMaker<User>;

// const masud: OptionalUser = {
//     name: 'Masud'
// }


/// Custom Readonly
// type ReadonlyMaker<T> = {
//     readonly [K in keyof T]: T[K]
// }

// const roUser: ReadonlyMaker<User> = {
//     name: 'Masud',
//     email: 'masud24@gmail.com',
//     id: 324
// }

// roUser.name = 'Ataullah'; // It shows an error



/// Custom Required
// type OptUser = {
//   name?: string;
//   email?: string;
//   id?: number;
// };
// type RequiredMaker<T> = {
//     [K in keyof T]-?: T[K]
// }

// const rqUser: RequiredMaker<OptUser> = {
//   name: "Masud",
//   email: "masud23@gmail.com",
// };



/// Key Remapping
// I didn't understood it yet.
type ApiUser = {
    name: string;
    id: number;
} 

type Getters<T> = {
    [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
}

const response: Getters<ApiUser> = {
    getName: ()=> 'Yes',
    getId: ()=> 345,
}