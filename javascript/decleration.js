// Try declaring variables with var, let, and const
var name = "Athul";
let age = 25;
const country = "India";

console.log(name, age, country);

// Now, try changing their values
name = "Hari";  // ✅ allowed
age = 26;       // ✅ allowed
// country = "USA";  ❌ Error: Assignment to constant variable

console.log(name, age, country);
