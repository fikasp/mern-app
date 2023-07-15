export default function useErrors(app) {
	app.use((err, req, res, next) => {
		res.status(500)
		res.send('Server error...')
		console.error(err)
	})
}