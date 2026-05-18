// Generic type preserved
function identity<T>(value: T): T {
  return value;
}

// const masud = identity<string>("_masud388");
const jobaer = identity<number>(97);
// console.log(masud);

// Generic interface
interface User<T> {
  name: string;
  age: number;
  id: T;
}

const mahfuj: User<number> = {
  name: "Mahfuj",
  age: 18,
  id: 110,
};
const rokeya: User<string> = {
  name: "Rokeya",
  age: 31,
  id: "salma123",
};

// console.log(rokeya);

function getFirst<Type>(arr: Type[]): Type {
  return arr[0];
}
const nums: number[] = [123, 456, 789];
const strs = ['str1', 'str2', 'str3'] 
// console.log(getFirst(nums));
// console.log(getFirst(strs));


function getLength<T extends { length: number }>(data: T): number {
  return data.length;
}
// console.log(getLength('masud'));


function isQawmi<T extends { name: string, isHonorable: boolean }>(data: T): string {
  if(data.isHonorable) {
  return `Yes, ${data.name} is graduated in Qawmi madrasa`;
  } else {
  return `No, ${data.name} isn't graduated in Qawmi madrasa`;
  }
}

type Student = {
  name: string;
  age: number;
  isHonorable: boolean;
}
const masud: Student = {
  name: 'Masud',
  age: 20,
  isHonorable: true,
}

const alam: Student = {
  name: 'Alam',
  age: 22,
  isHonorable: false,
}

console.log(isQawmi(masud));