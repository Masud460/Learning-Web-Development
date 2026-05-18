// typeof Narrowing;

function printValue(value: string | number): void {
  if (typeof value === "string") {
    console.log(value.toLowerCase());
  } else {
    console.log(value + 5);
  }
}
// printValue('Masud');
// printValue(989)

// instanceof Narrowing
class Student {
  constructor(public name: string) {}
  tellAboutSelf() {
    return `${this.name} is a Student`;
  }
}
const teacher: string = "Jobaer";
const masud: Student = new Student("Masud");

function checkPerson(person: Student | number) {
  if (person instanceof Student) {
    console.log(person.tellAboutSelf());
    return
  }
  console.log(person * 3);
}
// checkPerson(4);
// checkPerson(masud);

// Truthiness Narrowing (null, undefined)
let username: string | null = 'Masud';
function greet(name: string | null): void {
  if (name) {
    console.log(`Hello, ${name}`);
    return;
  }
  console.log(`Hello, Guest!`);
}
// username = null;
// greet(username)

// "in" Operator Narrowing
type Car = { speed: number; brand: string; }
type Bike = { speed: number; gears: number; }

function describe(vehicle: Car | Bike): string{
  if ("brand" in vehicle) {
    return `${vehicle.brand} car`
  } else {
    return `Bike gears ${vehicle.gears}`
  }
}
const bmw: Car = {
  brand: "BMW",
  speed: 350,
}
const kawasaki: Bike = {
  speed: 400,
  gears: 6,
}
console.log(describe(kawasaki))
