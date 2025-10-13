// Import the User "model" (the file that handles user data)
const User = require('../models/userModel');

// -------------------- SIGNUP --------------------

// Show the signup page (GET /signup)
function showSignup(req, res) {
  // Render (display) the signup form page
  res.render('signup');
}

// Handle signup form submission (POST /signup)
function signup(req, res) {
  // Get the data from the form (username and password)
  const username = req.body.username;
  const password = req.body.password;

  // Check if the user already exists
  const existingUser = User.findUser(username);
  if (existingUser) {
    return res.send('❌ User already exists! Please try another username.');
  }

  // If not, add the user
  User.addUser(username, password);

  // Send a response back
  res.send('✅ Signup successful! You can now <a href="/login">Login</a>.');
}

// -------------------- LOGIN --------------------

// Show the login page (GET /login)
function showLogin(req, res) {
  res.render('login');
}

// Handle login form submission (POST /login)
function login(req, res) {
  const username = req.body.username;
  const password = req.body.password;

  // Try to find the user
  const user = User.findUser(username);

  // Check if user exists AND password matches
  if (user && user.password === password) {
    res.send(`🎉 Welcome ${username}! <a href="/">Go Home</a>`);
  } else {
    res.send('❌ Invalid credentials! <a href="/login">Try again</a>.');
  }
}

// -------------------- HOME PAGE --------------------

// Show the home page (GET /)
function home(req, res) {
  res.render('index', { title: 'Simple Auth MVC Demo' });
}

// -------------------- EXPORT FUNCTIONS --------------------
// Make these functions available to other files (like routes)
module.exports = {
  showSignup: showSignup,
  signup: signup,
  showLogin: showLogin,
  login: login,
  home: home
};
