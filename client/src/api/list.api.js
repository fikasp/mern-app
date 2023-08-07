import API from './api'

export const readList = () => API.get(`/list`)
export const createListItem = (newItem) => API.post(`/list`, newItem)
export const updateListItem = (itemID, updatedItem) => API.patch(`/list/${itemID}`, updatedItem)
export const deleteListItem = (itemID) => API.delete(`/list/${itemID}`)
export const deleteList = () => API.delete(`/list`)
