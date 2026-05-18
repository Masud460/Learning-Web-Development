enum Grade {
    A = "Excelent",
    B = "Good",
    C = "Average",
    F = "Fail",
}

type Student = {
    name: string;
    age: number;
    studentId: number | string;
}
type Marks = {
    math: number;
    english: number;
    science: number;
}

type StudentResult = Student & Marks;

function calculateGrade(marks: number): Grade {
    if (marks >= 80) {
        return Grade.A;
    } else if (marks >= 60){
        return Grade.B;
    } else if (marks >= 40) {
        return Grade.C;
    } else {
        return Grade.F;
    }
}

function printResult(student: StudentResult): void {
    const averageMarks = Math.round((student.math + student.english + student.science) / 3);
    const grade: Grade = calculateGrade(averageMarks);
    console.log(`Student Name: ${student.name}, Average Marks: ${averageMarks}, Grade: ${grade}`);
}

const masud: StudentResult = {
    name: "Masud",
    age: 20,
    studentId: 460040,
    math: 76,
    english: 89,
    science: 85,
}

printResult(masud)