import * as actions from '../actions'
import * as service from '../../service/auth.api'
import { readList } from './list.action'

export const signIn = (formData, navigate) => async (dispatch) => {
	try {
		const { data } = await service.signIn(formData)
		await dispatch({ type: actions.AUTH_LOGIN, data })
		dispatch(readList())

		navigate('/')
	} catch (error) {
		dispatch({ type: actions.AUTH_ERROR, error })
		console.log(error)
	}
}

export const signUp = (formData, navigate) => async (dispatch) => {
	try {
		const { data } = await service.signUp(formData)
		console.log(data)

		await dispatch({ type: actions.AUTH_LOGIN, data })
		dispatch(readList())

		navigate('/')
	} catch (error) {
		dispatch({ type: actions.AUTH_ERROR, error })
		console.log(error)
	}
}
