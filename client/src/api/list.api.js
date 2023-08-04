import API from './api'

export const readList = () => API.get('/list')
export const createListItem = (newItem) => API.post('/list', newItem)
export const updateListItem = (id, updatedItem) =>
	API.patch(`/list/${id}`, updatedItem)
export const deleteListItem = (id) => API.delete(`/list/${id}`)
export const deleteList = () => API.delete('/list')
