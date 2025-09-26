const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

/* -----------------------------
   1. BUILT-IN MIDDLEWARE
------------------------------ */
// Parse JSON bodies
app.use(express.json());

// Parse URL-encoded data (form submissions)
app.use(express.urlencoded({ extended: true }));

// Serve static files from "public" folder
app.use(express.static(path.join(__dirname, 'public')));


/* -----------------------------
   2. APPLICATION-LEVEL MIDDLEWARE
   Runs for every request
------------------------------ */
app.use((req, res, next) => {
  console.log(`[App-level] ${req.method} ${req.url}`);
  next(); // go to next middleware/route
});


/* -----------------------------
   3. CUSTOM ROUTE-LEVEL MIDDLEWARE
   Only runs for specific routes
------------------------------ */
function checkAuth(req, res, next) {
  const token = req.query.token; // fake authentication via query param
  if (token === "secret123") {
    console.log("[Route-level] Auth success");
    next();
  } else {
    res.status(403).send("Forbidden: Invalid or missing token");
  }
}


/* -----------------------------
   ROUTES
------------------------------ */

// Public route (no middleware restriction)
app.get('/', (req, res) => {
  res.send('Welcome to Middleware Demo! Visit /protected or /form');
});

// Protected route (route-level middleware)
app.get('/protected', checkAuth, (req, res) => {
  res.send('This is a protected route. ✅ You passed authentication.');
});

// Form submission (uses built-in body parser middleware)
app.post('/form', (req, res) => {
  res.json({
    message: 'Form data received!',
    data: req.body
  });
});


/* -----------------------------
   4. ERROR-HANDLING MIDDLEWARE
   Must have 4 parameters
------------------------------ */
app.use((err, req, res, next) => {
  console.error("[Error-handling]", err.stack);
  res.status(500).send("Something broke! 🚨");
});


/* -----------------------------
   START SERVER
------------------------------ */
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
