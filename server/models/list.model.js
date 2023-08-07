import mongoose from 'mongoose'

const itemSchema = mongoose.Schema({
	name: { type: String, required: true },
	done: { type: Boolean, default: false },
	creator: String,
})

const ListItem = mongoose.model('Item', itemSchema)
export default ListItem
