
// ------------------ APP.JS ------------------
// Main entry point for our project

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Import our logger middleware
const logger = require('./middlewares/logger');

// Import routes
const userRoutes = require('./routes/userRoutes');

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Use our custom logger middleware
app.use(logger);

// Set the view engine to EJS (for rendering pages)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Use routes
app.use('/', userRoutes);

// Start the server
app.listen(PORT, function() {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
