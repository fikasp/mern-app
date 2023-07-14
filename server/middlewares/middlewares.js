import { fileURLToPath } from 'url'
import { join, dirname } from 'path'

import cors from 'cors'
import cookieParser from 'cookie-parser'
import express from 'express'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const clientBuildPath = join(__dirname, '../../client/build')


export default function useMiddlewares(app) {
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
}
