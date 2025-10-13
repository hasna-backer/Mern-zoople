import { users } from '../models/userModel.js';

export const showSignup = (req, res) => {
  res.render('signup');
};

export const signup = (req, res) => {
  const { username, password } = req.body;
  if (users.find(u => u.username === username)) {
    return res.send('User already exists!');
  }
  users.push({ username, password });
  res.redirect('/users/home');
};

export const showLogin = (req, res) => {
  res.render('login');
};

export const login = (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if(user){
    res.render('home', { title: 'Home', message: `Welcome, ${username}!` });
  } else {
    res.send('Invalid credentials');
  }
};