// Type Conversion Example

// 1. Implicit Conversion (Type Coercion)
console.log("5" + 2);   // "52" (number 2 converted to string)
console.log("5" - 2);   // 3   (string "5" converted to number)
console.log("10" * "2"); // 20 (both strings converted to numbers)
console.log("10" / 2);   // 5

// 2. Explicit Conversion
let num = "123";
console.log(Number(num));   // 123 (string → number)
console.log(parseInt("123.45"));  // 123
console.log(parseFloat("123.45")); // 123.45

let val = 100;
console.log(String(val));   // "100" (number → string)
console.log((100).toString()); // "100"

// Boolean conversion
console.log(Boolean(1));   // true
console.log(Boolean(0));   // false
console.log(Boolean(""));  // false
console.log(Boolean("Hello")); // true











