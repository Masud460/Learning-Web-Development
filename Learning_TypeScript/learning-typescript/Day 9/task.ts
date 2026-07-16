function identity<T>(value: T): T {
    return value;
}
// console.log(identity<string>("Ataullah"));
// console.log(identity<number>(388));

function getFirst<T>(arr: Array<T>): T{
    return arr[0]
}

// console.log(getFirst([1, 2, 3,]));
// console.log(getFirst(['Ataullah', 'Saifullah', 'Abdullah']));


function wrapInArray<T>(value: T): T[]{
    return [value]
}
// console.log(wrapInArray('Masud'));


interface ApiResponse<T> {
    data: T;
    success: boolean;
    message: string;
}

const numberData: ApiResponse<number> = {
    data: 923479237,
    success: true,
    message: 'Data loaded.',
}

const stringData: ApiResponse<string[]> = {
    data: ['one', 'two', 'three'],
    success: false,
    message: 'Data not  loaded.'
}


function mergeObjects<T extends {}, K extends {}> (obj1: T, obj2: K): {} {
    return {...obj1, ...obj2}
}