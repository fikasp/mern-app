import axios from 'axios'
import { API_URL } from '../config/api'

const API = axios.create({ baseURL: API_URL })

API.interceptors.request.use((req) => {
	if (localStorage.getItem('profile')) {
		req.headers.Authorization = `Bearer ${
			JSON.parse(localStorage.getItem('profile')).token
		}`
	}
	return req
})

// list
export const readList = () => API.get('/list')
export const createListItem = (newItem) => API.post('/list', newItem)
export const updateListItem = (id, updatedItem) =>
	API.patch(`/list/${id}`, updatedItem)
export const deleteListItem = (id) => API.delete(`/list/${id}`)
export const deleteList = () => API.delete('/list')

// user
export const signIn = (formData) => API.post('/user/signin', formData)
export const signUp = (formData) => API.post('/user/signup', formData)
