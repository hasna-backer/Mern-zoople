// express-server-query.js
import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to Home Page 🏠");
});

app.get("/about", (req, res) => {
  const name = req.query.name || "Guest"; // directly from req.query
  res.send(`Hello ${name}, this is the About Page ℹ️`);
});

app.get("/contact", (req, res) => {
  res.send("Contact us at: contact@example.com 📧");
});

app.listen(3000, () => {
  console.log("✅ Express Server running at http://localhost:3000");
});
