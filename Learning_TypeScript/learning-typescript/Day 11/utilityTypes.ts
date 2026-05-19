// Partial

// interface User {
//     name: string;
//     id: number;
//     email: string;
// }

// let masud: User = {
//     name: 'Ataullah',
//     id: 299,
//     email: 'masud3245@gmail.com',
// }

// I don't understand this example
// function updateUser(user: User, change: Partial<User>): {} {
//     return {...user, change}
// }

// let checkChange = updateUser(masud, { name: 'masud' });
// console.log(checkChange);

// Required
// interface User {
//   name?: string;
//   id?: number;
// }

// const masud: Required<User> = {
//   name: "Masud",
//   id: 345,
// };
// const jobaer: User = {
//   name: 'jobaer',
// }

// function logNameAndId(obj: User): void{
//     console.log(obj.name, obj.id);
// }
// logNameAndId(masud);

// Readonly
// type Config = {
//   api: string;
// }

// const config: Readonly<Config> = {
//   api: '/api',
// }
// config.api = '/hack'; // It's displaing error cause of the 'Readonly' utility;
// console.log(config);

// Pick
// type User = {
//   name: string;
//   id: number;
//   email: string;
//   password: string;
// }

// type UserProfile = Pick<User, "name" | "id">;

// const userProfile: UserProfile = {
//   name: "Masud",
//   id: 345,
// };

// Omit
// type User = {
//   name: string;
//   id: number;
//   email: string;
//   password: string;
// }

// const frontendUser: Omit<User, "password"> = {
//   name: 'Masud',
//   id: 345,
//   email: 'masud234@gmail.com',
// }

// Record
// const role: Record<"admin" | "user" | "modarator" | "editor", string> = {
//   admin: "Masud",
//   user: "Ataullah",
//   modarator: "Jobaer",
//   editor: "Rokeya",
// };




// Exclude
// type Role = "admin" | "user" | "guest";
// const newUser: Exclude<Role, 'admin'> = 'guest';



// Extract
// type Role = "admin" | "user" | "guest";
// const newUser: Extract<Role, "user" | "guest" > = 'guest';



// NonNullable
// type User = string | null | undefined;
// const nonNullableuser: NonNullable<User> = undefined;




// ReturnType
// function getTea() {
//     return {
//         teaName: 'Milk Tea',
//         orderNo: 45,
//     }
// }

// type TeaMemo = ReturnType<typeof getTea>;

// const myTea: TeaMemo = {
//     teaName: 'Heavy Milk Tea',
//     orderNo: 125,
// }




// Parameter
// function createUser(name: string, id: number) {}

// type Arguments = Parameters<typeof createUser>;
// const user: Arguments = ['Masud', 2354]




// Awaited
async function getUser() {
    return{
        id: 897
    }
}

type AsyncType = Awaited<ReturnType<typeof getUser>>
const data: AsyncType = {id: 345};