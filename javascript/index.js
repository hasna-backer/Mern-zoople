// Strings
let color = "Yellow";
let lastName = "Johnson";

// Numbers
let length = 16;
let weight = 7.5;

// Bigint
let big1 = 1234567890123456789012345n;
let big2 = BigInt(1234567890123456789012345);

// Booleans
let isHappy = true;
let isSad = false;

// Object
const person = { firstName: "John", lastName: "Doe" };

// Array object
const cars = ["Saab", "Volvo", "BMW"];

// Date object
const today = new Date("2022-03-25");

// Undefined
let notDefined1;
let notDefined2;

// Null
let emptyValue1 = null;
let emptyValue2 = null;

// Symbol
const sym1 = Symbol("id1");
const sym2 = Symbol("id2");

// ===== Output to console =====
console.log("String:", color, lastName);
console.log("Numbers:", length, weight);
console.log("BigInt:", big1, big2);
console.log("Booleans:", isHappy, isSad);
console.log("Object:", person);
console.log("Array:", cars);
console.log("Date:", today);
console.log("Undefined:", notDefined1, notDefined2);
console.log("Null:", emptyValue1, emptyValue2);
console.log("Symbols:", sym1, sym2);
