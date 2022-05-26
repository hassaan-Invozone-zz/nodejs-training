const express = require('express')

const app = express()
const cors = require('cors')
const dotenv = require('dotenv')
const path = require('path')

// CONSTANTS
dotenv.config()
const PORT = process.env.PORT || 8000

// MIDDLEWARES
app.use(express.json()) // to return files as json
app.use(cors()) // for cross origin  files

// ROUTES
app.use('/auth', require('./routes/auth'))

app.get('/', function (req, res, next) {
    res.send('Hello World')
})
// SERVER PORT
app.listen(PORT, () => {
    console.log(`Server started on port http://localhost:${PORT}`)
})
