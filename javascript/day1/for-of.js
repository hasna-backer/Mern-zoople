let names = ["Hasna", "Amina", "Safa"];



















// let numbers = [10, 20, 30];
// for (let num of numbers) {
//   console.log(num*2);
// }



// let names = ["hasna", "devika", "shahana"];
// names =["HASNA", "DEVIKA", "SHAHANA"]




const scores = [35, 42, 50, 28, 60, 41];



let passedCount = 0;

for (let i = 0; i < scores.length; i++) {
  if (scores[i] >= 40) {
    passedCount++;
  }
}

console.log(passedCount);







 let passedCount = 0; 
 scores.forEach(function(score)  {
	 if (score >= 40) {
		 passedCount++; }
	}); 

console.log("Number of tests passed:", passedCount);



let fruits = ["apple", "banana", "mango"];
fruits.forEach(function(item) {
  console.log(item);
});



// let cart = ["Milk", "Bread", "Eggs", "Juice"];

// for (let item of cart) {
//   console.log("Added item:", item);
// }



let items = ["pen", "book", "pencil"];
items.forEach((item, index) => {
  console.log(index, item);
});
