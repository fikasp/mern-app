import * as actions from '../actions'

const initialState = {
	isLoading: false,
	error: null,
}

export default function apiReducer(state = initialState, action) {
	switch (action.type) {
		case actions.API_LOADING:
			console.log(actions.API_LOADING, action.payload)
			return { ...state, isLoading: action.payload }

		case actions.API_ERROR:
			console.log(actions.API_ERROR, action.payload)
			return { ...state, error: action.payload }

		default:
			return state
	}
}
