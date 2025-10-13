
// ------------------ USER ROUTES ------------------
// Connects URLs to controller functions

const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

// Home page
router.get('/', userController.home);

// Signup routes
router.get('/signup', userController.showSignup);
router.post('/signup', userController.signup);

// Login routes
router.get('/login', userController.showLogin);
router.post('/login', userController.login);

module.exports = router;
