import axios from 'axios'
import { API_URL } from '../config/api'

const url = `${API_URL}/list`

export const readList = () => axios.get(url)
export const createListItem = (newItem) => axios.post(url, newItem)
export const updateListItem = (id, updatedItem) => axios.patch(`${url}/${id}`, updatedItem)
export const deleteListItem = (id) => axios.delete(`${url}/${id}`)
