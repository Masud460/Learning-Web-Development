function hasLength<T extends {length: number}>(arg: T): boolean{
    return arg.length >= 0 ? true : false;
}

// console.log(hasLength<string>('Ataullah'));
// console.log(hasLength(8967));


function getKeys<T, J extends keyof T>(obj: T, key: J): T[J] {
    return obj[key]
}

type Student = {
    name: string;
    age: number;
}

const masud3: Student = {
    name: 'Masud',
    age: 20,
}
