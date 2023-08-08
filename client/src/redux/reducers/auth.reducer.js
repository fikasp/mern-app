import * as actions from '../actions'
const initialState = {
	authData: null,
	errors: null,
}

export default function authReducer(state = initialState, action) {
	switch (action.type) {
		case actions.AUTH_LOGIN:
			console.log(actions.AUTH_LOGIN)
			localStorage.setItem('profile', JSON.stringify({ ...action?.data }))
			return { ...state, authData: action?.data, errors: null }

		case actions.AUTH_LOGOUT:
			console.log(actions.AUTH_LOGOUT)
			localStorage.clear()

			return { ...state, authData: null, errors: null }

		case actions.AUTH_ERROR:
			console.log(actions.AUTH_ERROR)
			return { ...state, authData: null, errors: action.error }

		case actions.AUTH_CLEAR:
			console.log(actions.AUTH_CLEAR)
			return { ...state, authData: null, errors: null }

		default:
			return state
	}
}
