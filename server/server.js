import express from 'express'
import useErrors from './middlewares/errors.js'
import useLoggers from './middlewares/loggers.js'
import useParsers from './middlewares/parsers.js'
import useStatic from './middlewares/static.js'
import useListRouter from './routes/list.routes.js'

const port = process.env.PORT || 5000
const app = express()

useParsers(app)
useLoggers(app)

useListRouter(app)

useStatic(app)
useErrors(app)

app.listen(port, () => {
  console.log(`
Server started...
http://localhost:${port}`)
})

export default app