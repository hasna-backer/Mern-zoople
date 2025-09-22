const fs = require("fs");
const path = require("path");

// 1. Create a folder named "practice"
const folderPath = path.join(__dirname, "practice");

if (!fs.existsSync(folderPath)) {
  fs.mkdirSync(folderPath);
  console.log("Folder created:", folderPath);
}

// 2. Create a file "notes.txt" with initial text
const filePath = path.join(folderPath, "notes.txt");
fs.writeFileSync(filePath, "Learning Node.js is fun!");
console.log("File created:", filePath);

// 3. Append more text
fs.appendFileSync(filePath, " Keep practicing daily.");
console.log("Text appended!");

// 4. Read and display file content
const data = fs.readFileSync(filePath, "utf8");
console.log("File Content:", data);

// 5. Log the absolute path of the file
console.log("Absolute Path:", path.resolve(filePath));
