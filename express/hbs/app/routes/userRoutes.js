import express from 'express';
import { showSignup, signup, showLogin, login } from '../controllers/userController.js';
const router = express.Router();
router.get('/signup', showSignup);
router.post('/signup', signup);
router.get('/login', showLogin);
router.post('/login', login);
router.get('/home', (req,res)=>res.render('home',{title:'Home Page',message:'Welcome!'}));
export default router;