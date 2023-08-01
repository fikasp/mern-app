import { CREATE, READ, UPDATE, DELETE } from '../actions'

export default (list = [], action) => {
	switch (action.type) {
		case CREATE:
			console.log(CREATE)
			return list
			
		case READ:
			console.log(READ)
			return action.payload

		case UPDATE:
			console.log(UPDATE)
			return list

		case DELETE:
			console.log(DELETE)
			return list

		default:
			return list
	}
}