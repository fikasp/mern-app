import { CREATE, READ, UPDATE, DELETE } from '../actions'

export default function listReducer (list = [], action) {
	switch (action.type) {
		case CREATE:
			console.log(CREATE)
			return [...list, action.payload]
			
		case READ:
			console.log(READ)
			return action.payload

		case UPDATE:
			console.log(UPDATE)
			return list.map(item => item.id == action.payload.id? action.payload : item)

		case DELETE:
			console.log(DELETE)
			return list.filter(item => item.id!== action.payload)

		default:
			return list
	}
}