const user: { name: string; age: number; email: string } = {
  name: "Masud",
  age: 20,
  email: "ataullahmasud388@gmail.com",
};

// Type Alias (solution of rewriting types in every object)
type User = {
  name: string;
  age: number;
  email?: string;
};

const masud: User = {
  name: "Masud",
  age: 20,
  email: "ataullahmasud388@gmail.com",
};

const mahfuj: User = {
  name: "Mahfuj",
  age: 18,
};

// Interface (Key similer with Type Alias)
interface Product {
  model: string;
  price: number;
  inStock?: boolean;
}

const laptop: Product = {
  model: "Mac book air",
  price: 799.99,
  inStock: true,
};

const mobile: Product = {
  model: "IPhone 17 Pro Max",
  price: 1199.99,
};

// Extending Interface
interface Animal {
  name: string;
  age: number;
}

interface Dog extends Animal {
  berk: boolean;
}

const pluto: Animal = {
  name: "Pluto",
  age: 1,
};

const miyoko: Dog = {
  name: "Miyoko",
  age: 1,
  berk: true,
};

// Extending Type Alias
type Student = {
  name: string;
  age: number;
  grade: number;
};

type ScholarshipStudent = {
  scholarshipAmount: number;
} & Student;

const ataullah: Student = {
  name: "Ataullah",
  age: 20,
  grade: 30,
};

const rokeya: ScholarshipStudent = {
  name: "Rokeya",
  age: 31,
  grade: 60,
  scholarshipAmount: 25000,
};

// console.log(ataullah);


// Review after one day

// Object literal
const newUser: {name: string, age: number} = {
  name: 'Masud',
  age: 20,
}

// Type Alias
type NewStudents = {
  name: string;
  age: number;
  email?: string;
}

type NewScholarshipStudents = {
  scholarshipAmount: number;
} & NewStudents;

const newUser1: NewStudents = {
  name: 'Ataullah',
  age: 20,
  email: 'masud@gmail.com',
}

const newScholarshipStudents: NewScholarshipStudents = {
  name: 'Rokeya Akter',
  age: 31,
  email: 'rokeya@gmail.com',
  scholarshipAmount: 500000,
}


// Interface

interface newStudent {
  name: string;
  age: number;
  phone?: number;
}

interface newScholarshipStudent extends newStudent {
  scholarshipAmount: number;
}

const newMasud: newStudent = {
  name: 'Masud',
  age: 20,
  phone: 1604205910,
}

const newRokeya: newScholarshipStudent = {
  name: 'Rokeya Akter',
  age: 31,
  scholarshipAmount: 500000,
}

console.log(newUser1);