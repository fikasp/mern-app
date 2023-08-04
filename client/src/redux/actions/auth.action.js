import * as actions from '../actions'
import * as api from '../api/index.js'

export const signIn = (formData, router) => async (dispatch) => {
	try {
		const { data } = await api.signIn(formData)

		dispatch({ type: actions.AUTH_LOGIN, data })
		
		router.push('/')
	} catch (error) {
		console.log(error)
	}
}

export const signUp = (formData, router) => async (dispatch) => {
	try {
		const { data } = await api.signUp(formData)

		dispatch({ type: actions.AUTH_LOGOUT, data })

		router.push('/')
	} catch (error) {
		console.log(error)
	}
}
