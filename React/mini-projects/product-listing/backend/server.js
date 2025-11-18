const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");

// Connect to database
connectDB();

// MIDDLEWARES
app.use(cors());         // ← ADD THIS HERE
app.use(express.json()); // For parsing JSON bodies (optional but recommended)

// ROUTES
app.use("/api/products", productRoutes);

// SERVER
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
