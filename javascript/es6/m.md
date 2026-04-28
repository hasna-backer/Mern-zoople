# Phase 1 — Node.js Runtime Fundamentals

> **Target Students:** Know basic JavaScript  
> **Goal:** Understand how JavaScript runs outside the browser and how to use Node's built-in tools.

---

## Lesson 1: What is Node.js?

### 📖 Explanation

Before Node.js, JavaScript could **only run inside browsers**. Node.js changed that.

**Node.js** is a JavaScript runtime built on Chrome's **V8 engine** that lets you run JavaScript on your computer (or a server) — outside the browser.

Why was Node created?
- Developers wanted to use JavaScript on the server side
- Non-blocking I/O makes it great for handling many simultaneous requests
- One language (JS) for both frontend and backend

```
Before Node:       After Node:
Frontend → JS      Frontend → JS
Backend  → PHP     Backend  → JS ✅
           Python
           Ruby
```

---

## Lesson 2: Node Architecture

### 📖 Explanation

**V8 Engine:** Google's open-source engine that compiles JavaScript to machine code. Node uses this same engine.

**Single-Threaded:** Node runs on one thread. It doesn't create a new thread for each request like traditional servers (e.g., Apache).

**Event Loop:** The mechanism that lets Node handle many operations without blocking. It constantly checks: "Is any async task done? If yes, run its callback."

**Non-blocking I/O:** When Node reads a file or queries a database, it doesn't *wait* — it moves on and comes back when the result is ready.

### Blocking vs Non-Blocking

```javascript
// ❌ BLOCKING — waits here, nothing else runs
const data = fs.readFileSync('file.txt')
console.log(data)
console.log('This prints after file is read')

// ✅ NON-BLOCKING — moves on immediately
fs.readFile('file.txt', (err, data) => {
  console.log(data)  // runs when ready
})
console.log('This prints BEFORE file is read!')
```

### Synchronous vs Asynchronous

| Synchronous | Asynchronous |
|-------------|--------------|
| Executes line by line | Starts task, moves on |
| Waits for each operation | Gets notified when done |
| Simple but slow | Slightly complex but fast |

### 💡 Analogy

A waiter at a restaurant:
- **Blocking (bad waiter):** Takes order from table 1, stands in kitchen waiting for food, delivers it, *then* goes to table 2.
- **Non-blocking (good waiter):** Takes order from table 1, gives it to kitchen, goes to table 2, table 3... kitchen calls when food is ready.

---

## Lesson 3: Node Global Objects

### 📖 Explanation

These are available everywhere in Node without requiring anything:

```javascript
// global — Node's equivalent of window in browser
global.myVar = 'hello'
console.log(myVar) // 'hello'

// __dirname — absolute path of the current directory
console.log(__dirname)
// e.g. /Users/you/projects/myapp

// __filename — absolute path of the current file
console.log(__filename)
// e.g. /Users/you/projects/myapp/server.js

// process — info about the running Node process
console.log(process.version)   // Node version
console.log(process.platform)  // 'darwin', 'linux', 'win32'
console.log(process.env)       // environment variables
process.exit(0)                // stop the process
```

---

## Lesson 4: Core Modules Introduction

### 📖 Explanation

Node comes with built-in modules — no installation needed.

```javascript
// Built-in modules — use require() with just the name
const fs = require('fs')
const path = require('path')
const os = require('os')

// External modules (installed via npm) — same syntax
const express = require('express')  // after npm install express
```

**Built-in** = ships with Node, always available  
**External** = downloaded from npm registry

---

## Lesson 5: FS Module (File System)

### 📖 Explanation

The `fs` module lets you work with files and folders.

```javascript
const fs = require('fs')

// --- READ FILE ---
// Async (recommended)
fs.readFile('notes.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err)
    return
  }
  console.log(data)
})

// Sync (blocks everything — avoid in servers)
const data = fs.readFileSync('notes.txt', 'utf8')
console.log(data)


// --- WRITE FILE (creates or overwrites) ---
fs.writeFile('output.txt', 'Hello World!', (err) => {
  if (err) throw err
  console.log('File written!')
})


// --- APPEND TO FILE ---
fs.appendFile('log.txt', 'New log entry\n', (err) => {
  if (err) throw err
})


// --- DELETE FILE ---
fs.unlink('oldfile.txt', (err) => {
  if (err) throw err
  console.log('File deleted')
})


// --- CREATE DIRECTORY ---
fs.mkdir('newFolder', { recursive: true }, (err) => {
  if (err) throw err
  console.log('Folder created')
})


// --- READ DIRECTORY ---
fs.readdir('./', (err, files) => {
  if (err) throw err
  console.log(files) // array of file/folder names
})
```

---

## Lesson 6: Path Module

### 📖 Explanation

The `path` module helps you work with file paths safely across different operating systems (Windows uses `\`, Mac/Linux uses `/`).

```javascript
const path = require('path')

// Join paths safely
path.join('/users', 'riya', 'docs', 'file.txt')
// → '/users/riya/docs/file.txt'

// Commonly used with __dirname
path.join(__dirname, 'data', 'users.json')
// → '/your/project/path/data/users.json'

// Get just the filename
path.basename('/users/riya/docs/file.txt')
// → 'file.txt'

// Get the file extension
path.extname('server.js')
// → '.js'

// Get the directory part
path.dirname('/users/riya/docs/file.txt')
// → '/users/riya/docs'
```

---

## Lesson 7: OS Module

### 📖 Explanation

```javascript
const os = require('os')

os.platform()   // 'linux', 'darwin', 'win32'
os.arch()       // 'x64', 'arm64'
os.cpus()       // Array of CPU core info
os.freemem()    // Free memory in bytes
os.totalmem()   // Total memory in bytes

// Pretty print free memory in MB
const freeMB = (os.freemem() / 1024 / 1024).toFixed(2)
console.log(`Free memory: ${freeMB} MB`)
```

---

## 🧠 Mini Exercises

**Exercise 1 — Global Objects**  
Create `globals.js`. Log `__dirname`, `__filename`, `process.version`, and `process.platform`. Run it with `node globals.js`.

**Exercise 2 — Read & Write**  
Write a script that:
1. Creates a file called `hello.txt` with the content `"Hello, Node!"`
2. Reads it back and logs its content

**Exercise 3 — Async vs Sync**  
Write two versions of a file-reading script:
- Version A: uses `readFileSync`
- Version B: uses `readFile` with a callback

Add a `console.log("After read call")` after each read call. Notice the difference in output order.

---

## 🚀 Mini Project: System Info Reporter

Create `system-report.js` that:
1. Uses the `os` module to gather: platform, architecture, total memory (MB), free memory (MB), number of CPU cores
2. Formats this into a readable string
3. Writes it to a file called `system-report.txt` using `fs`
4. Also logs "Report saved!" when done

Expected output in `system-report.txt`:
```
=== System Report ===
Platform: linux
Architecture: x64
Total Memory: 16384.00 MB
Free Memory: 4231.50 MB
CPU Cores: 8
```

---

## 📝 Assignment

**"Personal Logger"**

Build a simple logging utility `logger.js` with these features:

1. A function `log(level, message)` where level is `INFO`, `WARN`, or `ERROR`
2. Each call appends a new line to `app.log` in this format:
   ```
   [2024-01-15 10:32:05] [INFO] Server started
   [2024-01-15 10:32:10] [ERROR] Database connection failed
   ```
3. Include the actual timestamp using `new Date().toLocaleString()`
4. Create a `main.js` that imports and uses your logger to log 5 different messages
5. **Bonus:** Use `path.join(__dirname, 'app.log')` so the log file is always created in the right location regardless of where you run the script from

---