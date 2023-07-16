import axios from 'axios'

const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000'

export async function createData(name) {
	const response = await axios.post(`${apiUrl}/api`, { name })
	console.log(response)
}

export async function readData() {
	const response = await axios.get(`${apiUrl}/api`)
	return response.data
}

export async function updateData(id, updatedName) {
  const response = await axios.put(`${apiUrl}/api/${id}`, { name: updatedName })
  console.log(response)
}

export async function deleteData(id) {
	const response = await axios.delete(`${apiUrl}/api/${id}`)
	console.log(response)
}