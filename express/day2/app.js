// index.js
const express = require("express");
const app = express();

// middleware to parse JSON (we'll explain more tomorrow)
app.use(express.json());

// GET route - example: get all products
app.get("/products", (req, res) => {
  res.send("Here are all the products");
});

// GET route with simple text
app.get("/about", (req, res) => {
  res.send("This is a simple about page");
});

// POST route - example: create a new product
app.post("/products", (req, res) => {
  const newProduct = req.body; // expects JSON data
  res.send(`Product received: ${JSON.stringify(newProduct)}`);
});

const PORT = 7000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
