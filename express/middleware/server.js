const express = require('express');
const app = express();

// Custom middleware
function logger(req, res, next) {
  console.log(`${req.method} ${req.url}`);
  next(); // move to next middleware or route handler
}

app.use(logger); // apply globally

// Route
app.get('/', (req, res) => {
  res.send('Hello, Middleware!');
});

app.listen(3000, () => console.log('Server running on port 3000'));
