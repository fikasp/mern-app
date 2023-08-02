import { LIST_CREATE, LIST_READ, LIST_UPDATE, LIST_DELETE } from '../actions'

const initialState = []

export default function listReducer(state = initialState, action) {
	switch (action.type) {

		case LIST_READ:
			console.log(LIST_READ, action.payload)
			return action.payload

		case LIST_CREATE:
			console.log(LIST_CREATE, action.payload)
			return [...state, action.payload]

		case LIST_UPDATE:
			console.log(LIST_UPDATE, action.payload)
			return state.map(item => item.id === action.payload.id ? action.payload : item)

		case LIST_DELETE:
			console.log(LIST_DELETE, action.payload)
			return state.filter(item => item.id !== action.payload)

		default:
			return state
	}
}