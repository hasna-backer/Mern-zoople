import express from 'express'
import path from 'path'
import {fileURLToPath} from 'url'

const app=express()
const __filename=fileURLToPath(import.meta.url)
console.log("__filename:",__filename);

const __dirname=path.dirname(__filename)
console.log("__dirname:",__dirname);

//Express doesn’t automatically understand form data (the username and password sent from an HTML form). You need middleware to parse it first.


//Landing route
app.get('/',(req,res)=>{
res.sendFile(path.join(__dirname,'views/landing-page.html'))
})

//Home page
app.get('/home',(req,res)=>{
	res.se// Our "database" is just an array in memory (not permanent).
	const users = [];
	
	// Create a function to add a new user
	function addUser(username, password) {
	  // Make a new user object
	  const user = {
		id: users.length + 1,   // give an id (1,2,3,...)
		username: username,     // same as the username we got
		password: password      // same as the password we got
	  };
	
	  // Save this user into the array
	  users.push(user);
	
	  // Return the new user so we know what was added
	  return user;
	}
	
	// Create a function to find a user by username
	function findUser(username) {
	  // Go through the users array and return the first match
	  return users.find(function(u) {
		return u.username === username;
	  });
	}
	
	// Export (make available) the functions so other files // Our "database" is just an array in memory (not permanent).
const users = [];

// Create a function to add a new user
function addUser(username, password) {
  // Make a new user object
  const user = {
    id: users.length + 1,   // give an id (1,2,3,...)
    username: username,     // same as the username we got
    password: password      // same as the password we got
  };

  // Save this user into the array
  users.push(user);

  // Return the new user so we know what was added
  return user;
}

// Create a function to find a user by username
function findUser(username) {
  // Go through the users array and return the first match
  return users.find(function(u) {
    return u.username === username;
  });
}

// Export (make available) the functions so other files can use them
module.exports = {
  addUser: addUser,
  findUser: findUser
};
can use them
	module.exports = {
	  addUser: addUser,
	  findUser: findUser
	};
	ndFile(path.join(__dirname,'views','home.html'))
})

//login route
app.get('/login',(req,res)=>{
	res.sendFile(path.join(__dirname,'views','login.html'))
})

// login logic handling
// Collect user credentials
// Verify the credentials
// Create a session or token
// Redirect the user
app.post('/login',(req,res)=>{
    const data=req.body 
	console.log("data",req.body)
})

//signup route
app.get('/signup',(req,res)=>{
    res.send('signup page')
})

app.listen(3000,()=>{
    console.log('Server running at http://localhost:3000')
})