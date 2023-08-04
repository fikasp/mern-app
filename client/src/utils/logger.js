const active = true

export default function logger() {
	if (active) {
		// Get the function call stack
		const stack = new Error().stack

		// Find the line that contains the function call
		const callerLine = stack.split('\n')[2]

		// Find the beginning and end of the function name in the row
		const start = callerLine.indexOf('at ') + 3
		const end = callerLine.indexOf('(') - 1

		// Extract the name of the function
		const functionName = callerLine.substring(start, end)

		// Print function name
		console.log(`${functionName}()`)
	}
}