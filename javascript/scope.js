// var is function-scoped (or global)
// let is block-scoped

if (true) {
	var x = 10;  // var escapes the block
	let y = 20;  // let stays inside block
	console.log("Inside block:", x, y);
  }
  
  console.log("Outside block:", x); // ✅ works
  // console.log("Outside block:", y); // ❌ Error
  