let fruits = ["apple", "banana", "mango"];

for (let i of fruits) {
  console.log(i);
}

//for in
let person = { name: "Hasna", age: 25, city: "Thrissur" };

for (let key in person) {
  console.log(key, ":", person[key]);
}
