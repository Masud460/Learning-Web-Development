interface Student {
    name: string;
    age: number;
    grade: number;
    phone?: string;
}

interface ScholarshipStudent extends Student {
  scholarshipAmount: number;
}

const masud: Student = {
    name: 'Ataullah Masud',
    age: 20,
    grade: 20,
}

const rokeya: ScholarshipStudent = {
    name: 'Rokeya Akter',
    age: 31,
    grade: 79,
    scholarshipAmount: 250000,
    phone: '0'
}


type ID = string | number;
const myId: ID = 220;