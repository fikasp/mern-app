import axios from 'axios'

const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000'
console.log(apiUrl);

export async function createData(value) {
	const response = await axios.post(`${apiUrl}/api`,{value})
	console.log(response)
}

export async function readData() {
	const response = await axios.get(`${apiUrl}/api`)
	return response.data
}

export async function updateData(id, obj) {
  const response = await axios.put(`${apiUrl}/api/${id}`, obj)
  console.log(response)
}

export async function deleteData(id) {
	const response = await axios.delete(`${apiUrl}/api/${id}`)
	console.log(response)
}