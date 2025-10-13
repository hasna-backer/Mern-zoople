
// ---------------- APP.JS ----------------
// The entry point that connects Controller with Views

const express = require('express');
const bodyParser = require('body-parser');
const userController = require('./controllers/userController');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

// Set EJS as the template engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// ---------------- ROUTES ----------------
// Directly connect routes to controller functions

app.get('/', userController.home);
app.get('/signup', userController.showSignup);
app.post('/signup', userController.signup);
app.get('/login', userController.showLogin);
app.post('/login', userController.login);

// Start server
app.listen(PORT, function() {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
