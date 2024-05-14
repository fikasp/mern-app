export default function useErrors(app) {
	app.use((err, req, res, next) => {
		const status = err.status || 500
		const message = err.message || 'Server error...'
		res.status(status)
		res.json({ status, error: message })
	})
}
