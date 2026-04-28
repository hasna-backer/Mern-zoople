const Product = require("../models/Product");
exports.getProducts = async (req, res) => {
const products = await Product.find();
console.log(products);

res.json(products);
};