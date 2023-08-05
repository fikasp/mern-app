import * as actions from '../actions'
import * as api from '../../api/auth.api'

export const signIn = (formData, navigate) => async (dispatch) => {
	try {
		const { data } = await api.signIn(formData)
		console.log(data)

		dispatch({ type: actions.AUTH_LOGIN, data })

		navigate('/')
	} catch (error) {
		console.log(error)
	}
}

export const signUp = (formData, navigate) => async (dispatch) => {
	try {
		const { data } = await api.signUp(formData)
		console.log(data)

		dispatch({ type: actions.AUTH_LOGOUT, data })

		navigate('/')
	} catch (error) {
		console.log(error)
	}
}
