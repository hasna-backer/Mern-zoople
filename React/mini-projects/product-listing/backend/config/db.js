const mongoose = require("mongoose");
module.exports = async () => {
try {
await mongoose.connect("mongodb://127.0.0.1:27017/mern_sample");
console.log("MongoDB Connected");
} catch (err) {
console.error("DB Error:", err);
process.exit(1);
}
};