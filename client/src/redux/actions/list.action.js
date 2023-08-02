import {
	LIST_CREATE,
	LIST_READ,
	LIST_UPDATE,
	LIST_DELETE,
	API_LOADING,
	API_ERROR,
} from '../actions'
import * as api from '../../api/list.api'

export const readList = () => async (dispatch) => {
	try {
		dispatch({ type: API_LOADING, payload: true })
		const { data } = await api.readList()
		dispatch({ type: LIST_READ, payload: data })
		dispatch({ type: API_LOADING, payload: false })
	} catch (err) {
		console.error(err)
		dispatch({ type: API_LOADING, payload: false })
		dispatch({ type: API_ERROR, payload: err })
	}
}

export const updateList = () => async (dispatch) => {
	try {
		const { data } = await api.readList()
		dispatch({ type: LIST_READ, payload: data })
	} catch (err) {
		console.error(err)
	}
}

export const createListItem = (item) => async (dispatch) => {
	try {
		const { data } = await api.createListItem(item)
		dispatch({ type: LIST_CREATE, payload: data })
	} catch (err) {
		console.error(err)
	}
}

export const updateListItem = (id, key, value) => async (dispatch) => {
	try {
		const { data } = await api.updateListItem(id, { [key]: value })
		dispatch({ type: LIST_UPDATE, payload: data })
	} catch (err) {
		console.error(err)
	}
}

export const deleteListItem = (id) => async (dispatch) => {
	try {
		await api.deleteListItem(id)
		dispatch({ type: LIST_DELETE, payload: id })
	} catch (err) {
		console.error(err)
	}
}
