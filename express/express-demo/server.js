import express from "express";  // ESM import (since Node 18+ supports it)

// 1. Initialize express app
const app = express();

// 2. Define a route (GET request on "/")
app.get("/", (req, res) => {
  res.send("Hello World from Express 🚀");
});

app.get("/about", (req, res) => {
	res.send("About Page - Built with Express 💡");
  });

// 3. Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
