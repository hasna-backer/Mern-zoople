const mongoose = require("mongoose");
const Product = require("./models/Product");
require("dotenv").config();

async function seedData() {
  try {
    // connect to DB
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB Connected");

    // sample products
    const products = [
      { name: "Laptop", price: 55000 },
      { name: "Headphones", price: 2500 },
      { name: "Smartphone", price: 30000 },
      { name: "Watch", price: 1999 }
    ];

    // clear old data (optional but good practice)
    await Product.deleteMany();

    // insert new data
    await Product.insertMany(products);
    console.log("Products Seeded Successfully");

    process.exit(); // close script
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seedData();
