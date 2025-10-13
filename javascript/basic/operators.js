// JavaScript Operators Example

// 1. Arithmetic Operators
let a = 10;
let b = 3;
console.log("Arithmetic Operators:");
console.log("a + b =", a + b); // 13
console.log("a - b =", a - b); // 7
console.log("a * b =", a * b); // 30
console.log("a / b =", a / b); // 3.333...
console.log("a % b =", a % b); // 1 (remainder)
console.log("a ** b =", a ** b); // 1000 (10^3)

// 2. Assignment Operators
let x = 5;
console.log("\nAssignment Operators:");
x += 2;  // x = x + 2
console.log("x += 2 →", x); // 7
x -= 2; // x = x - 2
console.log("x -= 2 →", x); // 5
x *= 3; // x = x * 3
console.log("x *= 3 →", x); // 15
x /= 3; // x = x / 3
console.log("x /= 3 →", x); // 5
x %= 2; // x = x % 2
console.log("x %= 2 →", x); // 1

// 3. Comparison Operators
console.log("\nComparison Operators:");
console.log("a == '10' →", a == "10");   // true (loose equality)
console.log("a === '10' →", a === "10"); // false (strict equality)
console.log("a != b →", a != b);         // true
console.log("a !== b →", a !== b);       // true
console.log("a > b →", a > b);           // true
console.log("a < b →", a < b);           // false
console.log("a >= 10 →", a >= 10);       // true
console.log("b <= 2 →", b <= 2);         // false

// 4. Logical Operators
let p = true, q = false;
console.log("\nLogical Operators:");
console.log("p && q →", p && q); // false
console.log("p || q →", p || q); // true
console.log("!p →", !p);         // false

// 5. Unary Operators 


let num = 5;
console.log("\nUnary Operators:");
console.log("+num →", +num); // 5
console.log("-num →", -num); // -5
console.log("++num →", ++num); // 6 (pre-increment)
console.log("num++ →", num++); // 6 (then increases to 7)
console.log("num after num++ →", num); // 7
console.log("--num →", --num); // 6 (pre-decrement)
console.log("num-- →", num--); // 6 (then decreases to 5)
console.log("num after num-- →", num); // 5

// 6. Ternary Operator
let age = 18;
console.log("\nTernary Operator:");
let result = (age >= 18) ? "Eligible to vote" : "Not eligible";
console.log(result);

// 7. Bitwise Operators
let m = 5;   // 0101
let n = 3;   // 0011
console.log("\nBitwise Operators:");
console.log("m & n →", m & n); // 1 (0101 & 0011 = 0001)
console.log("m | n →", m | n); // 7 (0101 | 0011 = 0111)
console.log("m ^ n →", m ^ n); // 6 (0101 ^ 0011 = 0110)
console.log("~m →", ~m);       // -6 (bitwise NOT)
console.log("m << 1 →", m << 1); // 10 (shift left)
console.log("m >> 1 →", m >> 1); // 2 (shift right)
