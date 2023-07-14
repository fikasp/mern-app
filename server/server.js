import express from 'express'
import useMiddlewares from './middlewares/middlewares.js'
import apiRouter from './routes/api.js'

const app = express()
const port = process.env.PORT || 5000

// middlewares
useMiddlewares(app)

// api routing
app.use('/api', apiRouter)

// port listening
app.listen(port, () => {
  console.log(`Server started... http://localhost:${port}`)
})

export default app

