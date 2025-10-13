const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { validateInput } = require('../middlewares/authMiddleware');

// Home
router.get('/', authController.home);

// Signup
router.get('/signup', authController.showSignup);
router.post('/signup', validateInput, authController.signup);

// Login
router.get('/login', authController.showLogin);
router.post('/login', validateInput, authController.login);

module.exports = router;
