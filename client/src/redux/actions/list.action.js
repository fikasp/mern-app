import * as api from '../../api/list.api'
import { CREATE, READ, UPDATE, DELETE, LOADING, ERROR } from '../actions'

export const createListItem = (item) => async (dispatch) => {
  try {
    const { data } = await api.createListItem(item)
    dispatch({ type: CREATE, payload: data })

  } catch (err) {
    console.error(err)
  }
}

export const readList = () => async (dispatch) => {
  try {
    dispatch({ type: LOADING, payload: true })
    const { data } = await api.readList()
    dispatch({ type: READ, payload: data })
    dispatch({ type: LOADING, payload: false })

  } catch (err) {
    console.error(err)
    dispatch({ type: LOADING, payload: false })
    dispatch({ type: ERROR, payload: err })
  }
}

export const updateListItem = (id, key, value) => async (dispatch) => {
  try {
    const { data } = await api.updateListItem(id, {[key]: value})
    dispatch({ type: UPDATE, payload: data })

  } catch (err) {
    console.error(err)
  }
}

export const deleteListItem = (id) => async (dispatch) => {
  try {
    await api.deleteListItem(id)
    dispatch({ type: DELETE, payload: id })

  } catch (err) {
    console.error(err)
  }
}