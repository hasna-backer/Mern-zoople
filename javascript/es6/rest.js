const person = {
	name: "Alice",
	age: 25,
	city: "New York",
	country: "USA"
  };
  
  const { name, ...restInfo } = person;
  
  console.log(name);      // Output: "Alice"
  console.log(restInfo);  // Output: { age: 25, city: "New York", country: "USA" }
  