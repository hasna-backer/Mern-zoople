// let cart=[
// 	{name:"cooker",price:2000,image:"filename.png",quantity:1},
// 	{name:"oven",price:1000,image:"filename.png",quantity:1},
// 	{name:"toaster",price:500,image:"filename.png",quantity:1},
// ]



// cart_total=0;
// for(let i=0;i<cart.length;i++){
// 	cart_total=cart_total+cart[i].price
// }
// console.log(cart_total);	



let cart=[
	{name:"ps5",price:49000,quantity:1,image:"filename.png"},
	{name:"washing machine",price:3000,quantity:2,image:"filename.png"},
	{name:"AC",price:5000,quantity:1,image:"filename.png"}
]
let total=0;
for(let i=0;i<cart.length;i++){
	total+=cart[i].price*cart[i].quantity
}

console.log(total);
























// object1={
// 	name:"hasna",
// 	age:22,
// 	city:"Thrissur"
// }

// object1.name

// console.log(object1["city"]);
// console.log(object1.age);



// array2=["Sanjay",22,"Thrissur"]

// console.log(array2[1]);
// console.log(object1["name"]);
// console.log(object1.name);



// obj={
// 	1:"Sanjay",
// 	2:22,
// 	3:"Thrissur"
// }

// //array of objects

// let array3=[
// 	{name:"Sanjay",age:22,city:"Thrissur"},
// 	{name:"Devika",age:21,city:"Thrissur"},
// 	{name:"Ansab",age:22,city:"Thrissur"},
// ]









// cart=[
// 	{name:"cooker",price:2000,image:"filename.png",quantity:1},
// 	{name:"oven",price:1000,image:"filename.png",quantity:1},
// 	{name:"toaster",price:500,image:"filename.png",quantity:1},
// ]

// console.log(cart[0].name);





// //methods

let user = {
	name: "Hasna",
	age: 25,

	greet: function () {
	console.log("Hello, my name is " + this.name);
	}
	};
	
	
	user.greet();

let userProfile = {
	name: "Hasna",
	email: "hasna@gmail.com",
	active: true,
	showProfile() {
	  console.log("User Profile");
	  console.log("Name:", this.name);
	  console.log("Email:", this.email);
	  console.log("Status:", this.active ? "Active" : "Inactive");
	}
  };
  
  userProfile.showProfile();
  


// let active=false;
// // if(active){
// // 		console.log("user is active");
// // }else{
// // 		console.log("user is inactive");
// // }

// active? console.log("user is active") : console.log("user is inactive");

// condition? true:false
