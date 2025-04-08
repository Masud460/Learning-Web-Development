const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
console.log(shopping);

// Finding the length of an array
console.log(shopping.length);

// Accessing and modifying array items
shopping[4] = "burger";
console.log(shopping);

// Finding the index of items in an array
const birds = ["Parrot", "Falcon", "Owl"];

console.log(birds.indexOf("Owl")); //  2
console.log(birds.indexOf("Rabbit")); // -1

// Adding items
const cities = ["Manchester", "Liverpool"];
// cities.push("Cardiff");
// console.log(cities);
// cities.push("Bradford", "Brighton");
// console.log(cities);

const newLength = cities.push("Bristol");
console.log(cities); // [ "Manchester", "Liverpool", "Bristol" ]
console.log(newLength); // 3

// Add an item to the start of the array
cities.unshift("Dhaka");
console.log(cities);

// Remove the last item from the array
let removedCity = cities.pop();
console.log(cities);

console.log(removedCity);

// Remove the first item from an array
// cities.shift()
console.log(cities);

// If you know the index of an item, you can remove it from the array using splice():
const index = cities.indexOf("Manchester");
cities.splice(index, 1);
console.log(cities);

// Accessing every item

for (bird of birds) {
  console.log(bird);
}

// map method
const arr = [76, 67, 79, 90];

const grace = arr.map(function (item) {
  return item + 5;
});
console.log(grace);

// Converting between strings and arrays
const names = "Ataullah Masud Saifullah Mahfuj Abdullah Jubaer";
const arrayOfNames = names.split(" ");
console.log(arrayOfNames);

// You can also go the opposite way using the join() method. Try the following:
const oposite = arrayOfNames.join(" ");
console.log(oposite);
console.log(arrayOfNames.toString());