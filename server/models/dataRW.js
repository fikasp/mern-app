import { promises as fs } from 'fs'
const path = './data.json'

export async function read() {
	const string = await fs.readFile(path, 'utf8')
	return JSON.parse(string)
}

export async function write(data) {
	const string = JSON.stringify(data)
	await fs.writeFile(path, string, 'utf8')
}

export function getMaxId(records) {
	return records.reduce((maxId, record) => {
		return Math.max(maxId, record.id)
	}, 0)
}
