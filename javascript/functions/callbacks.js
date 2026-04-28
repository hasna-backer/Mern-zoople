
// function mainFunction(hi,num,good) {
// 	console.log(num);
// 	hi();
// 	good()
//   }
  
//   function sayHello() {
// 	console.log("Hello");
//   }
//   function bye() {
// 	console.log("BYE");
//   }
  
//   mainFunction(sayHello,5,bye);
  












// function greet(name) {
// 	console.log("Hello " + name);
//   }

// function download(download_sucess){
// 	hdalskjhdkajsd
// 	dhgavsdjhadfj
// 	dsiuahsdkljash
// 	dshagsdjghads
// 	download_sucess()
	
// }

// mainf(greet)






function calculate(num1, num2, operation) {
	return operation(num1, num2);
  }
  
  function add(a, b) {
	return a + b;
  }
  
  function multiply(a, b) {
	return a * b;
  }
  
  console.log(calculate(5, 3, add));
  console.log(calculate(5, 3, multiply));
  