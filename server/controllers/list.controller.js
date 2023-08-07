import ListItem from '../models/list.model.js'

export async function createListItem(req, res) {
	const { name } = req.body
	try {
		const newListItem = new ListItem({ name, creator: req.userId })
		await newListItem.save()

		res.status(201).json(newListItem)

		console.log(`Item added...`)
		console.log(newListItem)
	} catch (err) {
		res.status(409).json({ message: err.message })
	}
}

export async function readList(req, res) {
	try {
		const listItems = await ListItem.find()
		res.status(200).json(listItems)

		console.log(listItems)
	} catch (err) {
		res.status(404).json({ message: err.message })
	}
}

export async function updateListItem(req, res) {
	const { id } = req.params
	const updatedData = req.body
	try {
		const updatedItem = await ListItem.findByIdAndUpdate(
			id,
			{ $set: updatedData },
			{ new: true }
		)
		res.json(updatedItem)

		console.log(`Item updated...`)
		console.log(updatedItem)
	} catch (err) {
		res.status(404).json({ message: err.message })
	}
}

export async function deleteListItem(req, res, next) {
	const { id } = req.params
	try {
		const deletedItem = await ListItem.findByIdAndRemove(id)
		res.json({ message: `Item ${id} deleted successfully.` })

		console.log(`Item deleted...`)
		console.log(deletedItem)
	} catch (err) {
		next(err)
	}
}

export async function deleteList(req, res, next) {
	try {
		const deletedItems = await ListItem.deleteMany({})
		res.json({ message: 'All items deleted successfully.' })

		console.log(`All items deleted...`)
	} catch (err) {
		next(err)
	}
}
