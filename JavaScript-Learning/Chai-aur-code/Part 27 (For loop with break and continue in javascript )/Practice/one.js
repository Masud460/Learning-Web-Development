for (let i = 1; i <= 10; i++) {
    const element = i;
    // console.log(element);
}

for (let i = 1; i <= 10; i++) {
    // console.log(`outer value is: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`inner value is : ${j} and outer value is: ${i}`);
    }
}


const myArray = ['Jubaer', 'Masud', 'Mahfuj', 'Noman', 'Meem'];
for (let i = 0; i < myArray.length; i++) {
    // console.log(myArray[i]);
}


for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        // console.log('Detected 5');
        break;
    }
    // console.log(i);
}

for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log('Detected 5');
        continue;
    }
    console.log(i);
}