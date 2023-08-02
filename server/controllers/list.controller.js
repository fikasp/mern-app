import * as models from '../models/models.js'
const path = './models/data.json'

export async function createListItem(req, res) {
	try {
		const { name } = req.body
		const data = await models.read(path)

		const newID = models.getMaxId(data) + 1
		const newItem = { id: newID, name, done: false }

		const newData = [...data, newItem]
		await models.write(path, newData)

		console.log(`Item ${newItem.id} added...`)
		console.log(newItem)
		res.json(newItem)
	} catch (err) {
		next(err)
	}
}

export async function readList(req, res, next) {
	try {
		const list = await models.read(path)
		res.json(list)
		console.log(list)
	} catch (err) {
		next(err)
	}
}

export async function readListItem(req, res, next) {
	const { id } = req.params
	try {
		const list = await models.read(path)
		const listItem = list.find((record) => record.id === Number(id))
		if (!listItem) {
			const error = new Error(`Record ${id} does not exist...`)
			error.status = 404
			throw error
		}
		res.json(listItem)
		console.log(listItem)
	} catch (err) {
		next(err)
	}
}

export async function updateListItem(req, res, next) {
	const { id } = req.params
	const updatedData = req.body
	try {
		const list = await models.read(path)
		const itemIndex = list.findIndex((item) => item.id === Number(id))
		const updatedItem = { ...list[itemIndex], ...updatedData }

		const updatedList = list.map((item) =>
			item.id == Number(id) ? updatedItem : item
		)
		await models.write(path, updatedList)
		res.json(updatedItem)

		console.log(`Item ${id} updated...`)
		console.log(updatedItem)
	} catch (err) {
		next(err)
	}
}

export async function deleteListItem(req, res) {
	const { id } = req.params
	try {
		const list = await models.read(path)
		const newData = list.filter((record) => record.id !== Number(id))

		await models.write(path, newData)
		res.json(newData)

		console.log(`Item ${id} deleted...`)
	} catch (err) {
		next(err)
	}
}
