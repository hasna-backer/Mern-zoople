let numbers = [10, 20, 30, 20, 40];

// indexOf
console.log(numbers.indexOf(20));  // 1 (first match)

// lastIndexOf
console.log(numbers.lastIndexOf(20)); // 3 (last match)

// includes
console.log(numbers.includes(30)); // true
console.log(numbers.includes(50)); // false

// find → returns first value matching condition
let found = numbers.find(num => num > 25);
console.log("Found:", found); // 30

// findIndex → index of first matching element
let idx = numbers.findIndex(num => num > 25);
console.log("Found index:", idx); // 2
