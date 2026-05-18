// Union type

let id: string | number;
id = 'masud';
id = 123;
id = true; // Error

function checkId(id: string | number): void {
    if (typeof id === 'string') {
        console.log(`ID is string`);
    }
    console.log(`ID is number`);
}



// Intersection type

type FreeUser = {
    name: string;
    age: number;
}

type PaidUser = {
    mbps: number;
    fee: number;
}

type PaidUserDetails = FreeUser & PaidUser;

const mahfuj: PaidUserDetails = {
    name: 'Mahfuj',
    age: 18,
    mbps: 10,
    fee: 500
}
console.log(mahfuj);