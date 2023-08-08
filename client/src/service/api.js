import axios from 'axios'
import { API_URL } from '../config/api'

const API = axios.create({ baseURL: API_URL })

API.interceptors.request.use((req) => {
	if (localStorage.getItem('profile')) {
		req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
	}
	return req
})

export default API
