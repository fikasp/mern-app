import * as actions from '../actions'
import logger from '../../utils/logger'
const initialState = {
	authData: null,
	loading: false,
	errors: null,
}

export default function authReducer(state = initialState, action) {
	switch (action.type) {
		case actions.AUTH_LOGIN:
			console.log(actions.AUTH_LOGIN)
			localStorage.setItem('profile', JSON.stringify({ ...action?.data }))
			return { ...state, authData: action?.data, loading: false, errors: null }

		case actions.AUTH_LOGOUT:
			console.log(actions.AUTH_LOGOUT)
			localStorage.clear()

			return { ...state, authData: null, loading: false, errors: null }
		default:
			return state
	}
}
