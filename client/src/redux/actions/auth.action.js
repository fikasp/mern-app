import * as actions from '../actions'
import * as api from '../../api/auth.api'

export const signIn = (formData, location) => async (dispatch) => {
	try {
		const { data } = await api.signIn(formData)

		dispatch({ type: actions.AUTH_LOGIN, data })
		
		location('/')
	} catch (error) {
		console.log(error)
	}
}

export const signUp = (formData, location) => async (dispatch) => {
	try {
		const { data } = await api.signUp(formData)

		dispatch({ type: actions.AUTH_LOGOUT, data })

		location('/')
	} catch (error) {
		console.log(error)
	}
}
