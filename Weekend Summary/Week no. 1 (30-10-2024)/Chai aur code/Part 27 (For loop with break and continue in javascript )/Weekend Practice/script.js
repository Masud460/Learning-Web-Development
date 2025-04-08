for (let i = 1; i <= 10; i++) {
  // console.log(i);
}

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer value ${i}`);
    for (let j = 1; j <= 10; j++){
        // console.log(`Inner value ${j} and outer value ${i}`);
    }
}


const myNum = [1, 2, 3, 4, 5, 6]
for (let i = 0; i < myNum.length; i++){
    // console.log(myNum[i]);
}

for (let i = 1; i <= 20; i++){
    if (i === 5) {
        // console.log(`Detected 5`);
        break;
    }
    // console.log(i);
}


for (let i = 1; i <= 20; i++){
    if (i === 5) {
        console.log(`Detected 5`);
        continue;
    }
    // console.log(i);
}