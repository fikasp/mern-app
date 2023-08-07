import * as actions from '../actions'

const initialState = []

export default function listReducer(state = initialState, action) {
	switch (action.type) {
		case actions.LIST_READ:
			console.log(actions.LIST_READ, action.payload)
			return action.payload

		case actions.LIST_CREATE:
			console.log(actions.LIST_CREATE, action.payload)
			return [...state, action.payload]

		case actions.LIST_UPDATE:
			console.log(actions.LIST_UPDATE, action.payload)
			return state.map((item) =>
				item._id === action.payload._id ? action.payload : item
			)

		case actions.LIST_DELETE:
			console.log(actions.LIST_DELETE)
			return state.filter((item) => item._id !== action.payload)

		case actions.LIST_DELETE_ALL:
			console.log(actions.LIST_DELETE_ALL)
			return initialState

		default:
			return state
	}
}
