let fruits = ["apple", "banana", "mango"];

// push → add at end
fruits.push("orange"); 
console.log(fruits); // ["apple", "banana", "mango", "orange"]

// pop → remove from end
fruits.pop();
console.log(fruits); // ["apple", "banana", "mango"]

// unshift → add at start
fruits.unshift("kiwi");
console.log(fruits); // ["kiwi", "apple", "banana", "mango"]

// shift → remove from start
fruits.shift();
console.log(fruits); // ["apple", "banana", "mango"]

// splice → add/remove at specific index
fruits.splice(1, 1, "grape", "pear"); 
// from index 1, remove 1 item, add "grape", "pear"
console.log(fruits); // ["apple", "grape", "pear", "mango"]

// slice → copy part of array (doesn’t change original)
let citrus = fruits.slice(1, 3);
console.log("Sliced:", citrus); // ["grape", "pear"]
