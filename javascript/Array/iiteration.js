let nums = [1, 2, 3, 4, 5];

// forEach → loop through each item
nums.forEach(n => console.log("forEach:", n));

// map → create new array by transforming values
let squares = nums.map(n => n * n);
console.log("Squares:", squares); // [1, 4, 9, 16, 25]

// filter → create new array with items that pass condition
let evens = nums.filter(n => n % 2 === 0);
console.log("Evens:", evens); // [2, 4]

// reduce → reduce array to single value
let sum = nums.reduce((acc, n) => acc + n, 0);
console.log("Sum:", sum); // 15

// reduceRight → same as reduce but from right to left
let sub = nums.reduceRight((acc, n) => acc - n);
console.log("ReduceRight:", sub);
