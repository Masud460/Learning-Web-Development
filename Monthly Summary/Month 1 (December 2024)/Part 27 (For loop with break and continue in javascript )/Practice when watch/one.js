// for

for (let i = 1; i <= 10; i++) {
    const element = i;
    // console.log(element);
}

for (let i = 0; i <= 10; i++) {
    // console.log(`outer loop value: ${i}`);
    for (let j = 0; j <= 10; j++) {
        // console.log(`inner loop ${j} and outer loop ${i}`);
        // console.log(`${i} * ${j} = ${i * j}`);
    }
}


const myArray = ['Ataullah', 'Jubaer', 'Saifullah', 'Noman', 'Meem'];
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element);
}


for (let index = 1; index <= 20; index++) {
    if (index === 5) {
        // console.log('Detected 5');
        break;
    }
    // console.log(index);    
}


for (let index = 1; index <= 20; index++) {
    if (index === 5) {
        console.log('Detected 5');
        continue;
    }
    console.log(index);    
}