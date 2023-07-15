import express from 'express'
import { fileURLToPath } from 'url'
import { join, dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const clientBuildPath = join(__dirname, '../../client/build')

export default function useStatic(app) {
	app.use(express.static(clientBuildPath))

  app.use((req, res) => {
		res.sendFile(join(clientBuildPath, 'index.html'))
	})
}
