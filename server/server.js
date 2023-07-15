import express from 'express'
import useErrors from './middlewares/errors.js'
import useLoggers from './middlewares/loggers.js'
import useParsers from './middlewares/parsers.js'
import useStatic from './middlewares/static.js'
import apiRouter from './routes/api.js'

const port = process.env.PORT || 5000
const app = express()

useParsers(app)
useLoggers(app)

app.use('/api', apiRouter)

useErrors(app)
useStatic(app)

app.listen(port, () => {
  console.log(`Server started... http://localhost:${port}`)
})

export default app