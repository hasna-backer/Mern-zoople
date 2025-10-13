let arr1 = ["hello", 2];
let arr2 = [3, "hiii"];

// concat → merge arrays
let merged = arr1.concat(arr2);
console.log("Merged:", merged); // [1,2,3,4]

// join → convert to string
console.log(merged.join("**")); // "1-2-3-4"
console.log(typeof(merged));

// flat → flatten nested arrays
let nested = [1,
	 [2, [3, 4]]
	];
console.log(nested.flat()); // [1, 2, 3, 4]



