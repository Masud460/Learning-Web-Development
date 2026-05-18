function greeting(name: string, roll: number = 20): void {
  if (roll) {
    console.log(`Hello, ${name}, and my roll is ${roll}`);
  } else {
    console.log(`Hello, ${name}`);
  }
}

type Maths = (a: number, b: number) => number;

const sum: Maths = (a, b) => {
    return a + b;
}
console.log(sum(3, 5));