// Exersize 1: Define an empty array
const foods = [];

console.log("Exersize 1 result: ", foods);

console.log("---------------------------------------------");

// Exercize 2: Add strings to the array
// Using push() method to add elements to the constant array
foods.push("Pizza");
foods.push("Cheeseburger");

console.log("Exersize 2 result: ", foods);

console.log("---------------------------------------------");

// Exercize 3: Insert at the beginning
foods.unshift("Taco");

console.log("Exersize 3 result: ", foods);

console.log("---------------------------------------------");

// Exersize 4: Access an array element
let favFood = foods[1];

console.log("Exersize 4 result: ", favFood);

console.log("---------------------------------------------");

// Exersize 5: Insert an element between two others
foods.splice(2, 0, "Tofu");

console.log("Exersize 5 result: ", foods);

console.log("---------------------------------------------");

// Exersize 6: Replace elements
foods.splice(1, 1, "Sushi", "Cupcake");

console.log("Exersize 6 result: ", foods);

console.log("---------------------------------------------");

// Exersize 7: Using the `slice()` method
const yummy = foods.slice(1, 3);

console.log("Exersize 7 result: ", yummy);

console.log("---------------------------------------------");

// Exercise 8: Finding an index
const soyIdx = foods.indexOf("Tofu");

console.log("Exersize 8 result: Index of 'Tofu' is: ", soyIdx);

console.log("---------------------------------------------");

// Exercise 9: Joining elements
const allFoods = foods.join(" -> ");

console.log("Exersize 9 result: ", allFoods);

console.log("---------------------------------------------");

// Exercise 10: Check for an element
let hasSoup = foods.includes("Soup");

console.log("Exersize 10 result: Has Soup?", hasSoup);

console.log("---------------------------------------------");

// Exercise 11: Odd numbers from an array
const odds = [];
const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];

for (let i = 0; i < nums.length; ++i) {
  if (nums[i] % 2 !== 0) {
    odds.push(nums[i]);
  }
}

console.log("Exersize 11 result: Odd numbers: ", odds);

console.log("---------------------------------------------");

// Exercise 12: FizzBuzz with arrays
const fizz = [];
const buzz = [];
const fizzbuzz = [];

for (let i = 0; i < nums.length; ++i) {
  if (nums[i] % 3 == 0 && nums[i] % 5 == 0) {
    fizzbuzz.push(nums[i]);
  }

  if (nums[i] % 3 == 0) {
    fizz.push(nums[i]);
  }

  if (nums[i] % 5 == 0) {
    buzz.push(nums[i]);
  }

  // Note: I used 'if' statement for each condition, if I use 'else if' it will not work as expected
}

console.log("Exercise 12 Results:");
console.log("  Fizz:", fizz);
console.log("  Buzz:", buzz);
console.log("  FizzBuzz:", fizzbuzz);

console.log("---------------------------------------------");

// Exercise 13: Retrieve the Last Array
const numArrays = [
  [100, 5, 23],
  [15, 21, 72, 9],
  [45, 66],
  [7, 81, 90],
];
const numList = numArrays[numArrays.length - 1];

console.log("Exercise 13 result:", numList);

console.log("---------------------------------------------");

// Exercise 14: Accessing within nested arrays
let num = numArrays[2][1];

console.log("Exercise 14 result:", num);

console.log("---------------------------------------------");

// Exercise 15: Nested array sum
// forEach loop method:
let sum = 0;

numArrays.forEach((eachArray) => {
  eachArray.forEach((value) => {
    sum += value;
  });
});

console.log("Exercise 15 result (forEach):", sum);

// for loop method:
sum = 0;

for (let i = 0; i < numArrays.length; ++i) {
  for (let j = 0; j < numArrays[i].length; ++j) {
    sum += numArrays[i][j];
  }
}

console.log("Exercise 15 result (for loop):", sum);

console.log("---------------------------------------------");
