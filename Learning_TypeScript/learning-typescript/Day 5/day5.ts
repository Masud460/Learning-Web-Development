function sum(a: number, b: number): number {
    return a + b;
}

// function greeting(name: string): void {
//     console.log(`Hello, ${name}`);
// }
// greeting('Ataullah')


// Optional parameter
// function greeting(name: string, greeting?: string): void {
//     if (greeting) {
//         console.log(`${greeting}, ${name}`);
//     } else {
//         console.log(`Hello, ${name}`);
//     }

// }
// greeting('Masud', 'Assalamu Alikum');

// Default Parameter
function greeting(name: string, greeting: string = 'Hello'): void {
    console.log(`${greeting}, ${name}`);
}
// greeting("Masud", "Assalamu Alikum")




/// Arrow Function
const multiply = (a: number, b: number): number => a * b;

// Defining function in type alias

type MathOperation = (a: number, b: number) => number;

const add: MathOperation = (a, b) => a + b;
const divide: MathOperation = (a, b) => a / b;
console.log(divide(3, 5));