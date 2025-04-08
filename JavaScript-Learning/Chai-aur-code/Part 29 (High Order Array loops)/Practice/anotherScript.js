const myObj = {
  game1: "NFC",
  game2: "COC",
};
// for (const key of Object.keys(myObj)) {
//   console.log(key, ':', myObj[key]);
// }
// for (const key in myObj) {
//   console.log(key, ":", myObj[key]);
// }
// for (const [key, value] of Object.entries(myObj)) {
//   console.log(key, ":", value);
// }
// const myName = 'Masud';
// let nameArr = Array.of(myName)
// console.log(nameArr)


const nums = [1, 2, 3, 4, 5]
for (const num in nums) {
    // console.log(nums[num])
}
const callback = num => { console.log(num) };
// nums.forEach(callback)

const studentsInfo = [
    {
        name: 'Masud',
        id: 234,
        age: 19
    },
    {
        name: 'Jubaer',
        id: 235,
        age: 22
    },
    {
        name: 'Mahfuj',
        id: 233,
        age: 17
    },
]

studentsInfo.forEach(function (info) {
    console.log(`Student name is: ${info.name} and id is: ${info.id} and age is: ${info.age}`)
})