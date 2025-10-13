import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const app = express()

// To handle __dirname in ES modules
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Middleware to read form data
app.use(express.urlencoded({ extended: true }))




// ------------------ Start Server ------------------
app.listen(3000, () => {
  console.log('Server running at http://localhost:3000')
})
