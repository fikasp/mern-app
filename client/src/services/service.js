import axios from 'axios'

const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000'

export async function getData() {
	const response = await axios.get(`${apiUrl}/api`)
	return response.data
}

export async function addData(name) {
	const response = await axios.post(`${apiUrl}/api`, {name})
	console.log(response)
}

export async function deleteData(id) {
	const response = await axios.delete(`${apiUrl}/api/${id}`)
	console.log(response)
}