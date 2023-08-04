import * as actions from '../actions'
import * as api from '../../api/list.api'

export const readList = () => async (dispatch) => {
	try {
		dispatch({ type: actions.API_LOADING, payload: true })
		const { data } = await api.readList()
		dispatch({ type: actions.LIST_READ, payload: data })
		dispatch({ type: actions.API_LOADING, payload: false })
	} catch (err) {
		console.error(err)
		dispatch({ type: actions.API_LOADING, payload: false })
		dispatch({ type: actions.API_ERROR, payload: err })
	}
}

export const updateList = () => async (dispatch) => {
	try {
		const { data } = await api.readList()
		dispatch({ type: actions.LIST_READ, payload: data })
	} catch (err) {
		console.error(err)
	}
}

export const createListItem = (item) => async (dispatch) => {
	try {
		const { data } = await api.createListItem(item)
		dispatch({ type: actions.LIST_CREATE, payload: data })
	} catch (err) {
		console.error(err)
	}
}

export const updateListItem = (id, key, value) => async (dispatch) => {
	try {
		const { data } = await api.updateListItem(id, { [key]: value })
		dispatch({ type: actions.LIST_UPDATE, payload: data })
	} catch (err) {
		console.error(err)
	}
}

export const deleteListItem = (id) => async (dispatch) => {
	try {
		await api.deleteListItem(id)
		dispatch({ type: actions.LIST_DELETE, payload: id })
	} catch (err) {
		console.error(err)
	}
}

export const deleteList = () => async (dispatch) => {
	try {
		await api.deleteList()
		dispatch({ type: actions.LIST_DELETE_ALL })
	} catch (err) {
		console.error(err)
	}
}
