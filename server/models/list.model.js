import mongoose from 'mongoose'

const listItemSchema = mongoose.Schema({
	name: { type: String, required: true },
	done: { type: Boolean, default: false },
	creator: String,
})

const ListItem = mongoose.model('ListItem', listItemSchema)
export default ListItem
