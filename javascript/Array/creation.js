// Program 1: Array basics

// Create array of fruits
let fruits = ["apple", "banana", "mango"];
console.log("All fruits:", fruits);

// Access elements
console.log("First fruit:", fruits[0]);
console.log("Second fruit:", fruits[1]);
console.log("Last fruit:", fruits[fruits.length - 1]);

// Length property
console.log("Number of fruits:", fruits.length);



// Mixed array
let mixed = [1, "hello", true, {name: "Ali"}, [10, 20, 30]];
console.log("Mixed array:", mixed);

// Access object inside array
console.log("Name from object:", mixed[3].name);

// Access nested array element
console.log("Second number in nested array:", mixed[4][1]);

// Practice challenge
let arr = ["a", "b", "c"];
arr.pop();            // remove "c"
arr.push("d");        // add "d"
console.log("Final arr:", arr);
console.log("Length of arr:", arr.length);
