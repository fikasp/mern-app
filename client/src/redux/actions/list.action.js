import * as actions from '../actions'
import * as service from '../../service/list.api'

export const readList = () => async (dispatch) => {
	try {
		dispatch({ type: actions.API_LOADING, payload: true })
		const { data } = await service.readList()
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
		const { data } = await service.readList()
		dispatch({ type: actions.LIST_READ, payload: data })
	} catch (err) {
		console.error(err)
	}
}

export const createListItem = (newItem) => async (dispatch) => {
	try {
		const { data } = await service.createListItem(newItem)
		dispatch({ type: actions.LIST_CREATE, payload: data })
	} catch (err) {
		console.error(err)
	}
}

export const updateListItem = (itemID, key, value) => async (dispatch) => {
	try {
		const { data } = await service.updateListItem(itemID, { [key]: value })
		dispatch({ type: actions.LIST_UPDATE, payload: data })
	} catch (err) {
		console.error(err)
	}
}

export const deleteListItem = (itemID) => async (dispatch) => {
	try {
		await service.deleteListItem(itemID)
		dispatch({ type: actions.LIST_DELETE, payload: itemID })
	} catch (err) {
		console.error(err)
	}
}

export const deleteList = () => async (dispatch) => {
	try {
		await service.deleteList()
		dispatch({ type: actions.LIST_DELETE_ALL })
	} catch (err) {
		console.error(err)
	}
}
