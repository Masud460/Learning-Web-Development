interface RealApiResponse<T> {
    user: string;
    product: T;
}


const masud: RealApiResponse<string> = {
    user: 'Masud',
    product: 'MacBook',
}


/// Claude task
function displayValue<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

function pairArray<T extends any[], K extends any[]>(arr1: T, arr2: K): any[] {
    return arr1.map((e, i) => {
        return [e, arr2[i]]
    })
}

const pairedArr = pairArray([1, 2, 3], ['a', 'b', 'c'])
console.log(pairedArr);