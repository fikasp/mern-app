import express from 'express'
import mongoose from 'mongoose'

import useErrors from './middlewares/errors.js'
import useLoggers from './middlewares/loggers.js'
import useParsers from './middlewares/parsers.js'
import useStatic from './middlewares/static.js'
import useListRouter from './routes/list.routes.js'
import { PORT, CONNECTION_URL } from './config/config.js'

const app = express()

useParsers(app)
useLoggers(app)

useListRouter(app)

useStatic(app)
useErrors(app)

try {
	await mongoose.connect(CONNECTION_URL)

	app.listen(PORT, () => {
		console.log(`
Server started...
http://localhost:${PORT}`)
	})
} catch (err) {
	console.error(err)
}

export default app
