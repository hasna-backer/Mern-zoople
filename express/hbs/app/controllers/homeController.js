export const showHome = (req, res) => {
  res.render('home', { title: 'Home Page', message: 'Welcome to Home!' });
};