// const user = {
//     name: 'Masud',
//     age: 21,
//     gender: 'male'
// }

// const changedUser = user.name = 'Ataullah';

// console.log(user);


// // function constructor

// function CreateUser(name, id, age, gender) {
//     this.name = name;
//     this.id = id;
//     this.age = age;
//     this.gender = gender;
// }
// const userOne = new CreateUser("Masud", 3453, 21, "male");
// const userTwo = new CreateUser("Mahfuj", 3426, 19, "male");
// const userThree = new CreateUser("Jobaer", 3651, 24, "male");
// console.log(userOne, userTwo, userThree)


/// Class constructor

class Student {
    #password = '979d97986du' // Private variable
    constructor(
        name,
        age,
        subject
    ) {
        this.name = name;
        this.age = age;
        this.subject = subject;
    }

    getName() {
        console.log(this.name, this.#password);
    }
    getId() {
        console.log(this.id);
    }
}

const masud = new Student("Masud", 21, "Fiqh");
const mahfuj = new Student("Masud", 19, "Hadith");
const jobaer = new Student("Masud", 24, "Tafseer");

// console.log(masud);
// console.log(mahfuj);
// console.log(jobaer);
// masud.getName()



