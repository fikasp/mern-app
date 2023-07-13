import { fileURLToPath } from 'url'
import { join, dirname } from 'path'
import express from 'express'
import cookieParser from 'cookie-parser'
import apiRouter from './server/routes/api.js'
import cors from'cors'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const port = process.env.PORT || 5000
const clientBuildPath = join(__dirname, './client/build')

const app = express()

app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use(express.static(clientBuildPath))

app.use((req, res, next) => {
  console.log(req.method, req.url)
  next()
})

app.use((req, res, next) => {
  res.sendFile(join(clientBuildPath, 'index.html'))
  next()
})

app.use('/api', apiRouter)

app.listen(port, () => {
  console.log(`Server started... http://localhost:${port}`)
})

export default app

