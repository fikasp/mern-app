import cors from 'cors'
import cookieParser from 'cookie-parser'
import express from 'express'

export default function useParsers(app) {
	app.use(cors())
	app.use(cookieParser())
	app.use(express.json())
}
