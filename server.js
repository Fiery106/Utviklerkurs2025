import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import logger from './src/middleware/logger.js'
import posts from './src/routes/posts.js'
import errorHandler from './src/middleware/error.js'
import notFound from './src/middleware/notfound.js'

const port = process.env.PORT || 8000

const app = express()

// main route
// const __dirname = path.dirname(fileURLToPath(import.meta.url))
// app.use(express.static(path.join(__dirname, 'public')))

// Body parser middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Logger middleware
app.use(logger)

// Routes
app.use('/api/posts', posts)

// Error handler
app.use(notFound)
app.use(errorHandler)

app.listen(port, () => console.log(`server ${port} live`))