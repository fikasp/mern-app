import * as service from '../../services/service'
import { CREATE, READ, UPDATE, DELETE } from '../actions'

export const readList = () => async (dispatch) => {
  try {
    const data = await service.readData()
    dispatch({ type: READ, payload: data })

  } catch (err) {
    console.error(err.message)
  }
}