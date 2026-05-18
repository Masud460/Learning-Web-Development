function add(a: number, b: number): number {
    return a + b;
}

function introduce(name: string, age: number, city?: string): void {
    if(city){
        console.log(
          `I am ${name}, and I am ${age} years old, and I live in ${city}`,
        );
    } else {
        console.log(`I am ${name}, and I am ${age} years old`);
    }
}


type Calculator = (a: number, b: number) => number;

const divide: Calculator = (a, b) => a / b;
