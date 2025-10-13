
// ------------------ LOGGER MIDDLEWARE ------------------
// Logs every request that comes to the server

function logger(req, res, next) {
  console.log(`${req.method} ${req.url}`);
  next(); // Go to the next step (route/controller)
}

module.exports = logger;
