import mongoose from 'mongoose'

const listItemSchema = mongoose.Schema({
	name: String,
	done: Boolean,
})

const ListItem = mongoose.model('ListItem', listItemSchema)
export default ListItem
