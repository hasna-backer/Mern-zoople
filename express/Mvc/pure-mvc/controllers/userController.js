
// ---------------- USER CONTROLLER ----------------
// Handles the logic between Model and Views

const User = require('../models/userModel');

// Home page
function home(req, res) {
  res.render('index', { title: 'Pure MVC Demo' });
}

// Show signup form
function showSignup(req, res) {
  res.render('signup');
}

// Handle signup
function signup(req, res) {
  const { username, password } = req.body;

  const existingUser = User.findUser(username);
  if (existingUser) {
    return res.send('❌ User already exists! <a href="/signup">Try again</a>');
  }

  User.addUser(username, password);
  res.send('✅ Signup successful! <a href="/login">Login</a>');
}

// Show login form
function showLogin(req, res) {
  res.render('login');
}

// Handle login
function login(req, res) {
  const { username, password } = req.body;
  const user = User.findUser(username);

  if (user && user.password === password) {
    res.send(`🎉 Welcome ${username}! <a href="/">Go Home</a>`);
  } else {
    res.send('❌ Invalid credentials! <a href="/login">Try again</a>');
  }
}

module.exports = { home, showSignup, signup, showLogin, login };
