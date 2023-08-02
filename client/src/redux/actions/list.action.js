import * as api from '../../api/list.api'
import { LIST_CREATE, LIST_READ, LIST_UPDATE, LIST_DELETE, LOADING, ERROR } from '../actions'

export const readList = () => async (dispatch) => {
  try {
    dispatch({ type: LOADING, payload: true })
    const { data } = await api.readList()
    dispatch({ type: LIST_READ, payload: data })
    dispatch({ type: LOADING, payload: false })

  } catch (err) {
    console.error(err)
    dispatch({ type: LOADING, payload: false })
    dispatch({ type: ERROR, payload: err })
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