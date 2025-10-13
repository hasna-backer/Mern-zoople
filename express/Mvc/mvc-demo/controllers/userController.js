
// ------------------ USER CONTROLLER ------------------
// Handles the logic for login and signup

const User = require('../models/userModel');

// Show home page (GET /)
function home(req, res) {
  res.render('index', { title: 'Simple MVC Demo' });
}

// Show the signup page (GET /signup)
function showSignup(req, res) {
  res.render('signup');
}

// Handle signup form submission (POST /signup)
function signup(req, res) {
  const username = req.body.username;
  const password = req.body.password;

  const existingUser = User.findUser(username);
  if (existingUser) {
    return res.send('❌ User already exists! <a href="/signup">Try again</a>');
  }

  User.addUser(username, password);
  res.send('✅ Signup successful! <a href="/login">Login here</a>');
}

// Show the login page (GET /login)
function showLogin(req, res) {
  res.render('login');
}

// Handle login form submission (POST /login)
function login(req, res) {
  const username = req.body.username;
  const password = req.body.password;

  const user = User.findUser(username);

  if (user && user.password === password) {
    res.send(`🎉 Welcome ${username}! <a href="/">Go Home</a>`);
  } else {
    res.send('❌ Invalid credentials! <a href="/login">Try again</a>');
  }
}

// Export functions for routes
module.exports = {
  home: home,
  showSignup: showSignup,
  signup: signup,
  showLogin: showLogin,
  login: login
};
