const express = require('express');
const path = require('path');
const logger = require('./middlewares/logger');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = 3000;

// Built-in middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Custom middleware (application-level)
app.use(logger);

// Set up EJS views
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.use('/', authRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('[Error]', err.message);
  res.status(500).send('Internal Server Error');
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
