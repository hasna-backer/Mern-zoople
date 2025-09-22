let messagee="hi"
let message:string="hi"
let num:number=2222
// num="age"
console.log(num);
console.log(messagee);

function typescriptt(data:string|number){
	console.log(data);
	
}
typescriptt("hasna")
typescriptt(1111111)


function add(a:number,b:number):number{
return a+b
}

console.log("sum:",add(2,7));

function welcome(name:string,age?:number){
	age? console.log("Hi Im",name,age):console.log("Hi Im",name);
	
	
}

welcome("hasna",25)
welcome("hasna")
