import axios from 'axios'

const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000'
console.log(apiUrl);

export async function createData(value) {
	const { data } = await axios.post(`${apiUrl}/api`,{value})
	console.log(data)
	return data
}

export async function readData() {
	const { data } = await axios.get(`${apiUrl}/api`)
	console.log(data)
	return data
}

export async function updateData(id, updatedData) {
  const { data } = await axios.put(`${apiUrl}/api/${id}`, updatedData)
  console.log(data)
	return data
}

export async function deleteData(id) {
	const { data } = await axios.delete(`${apiUrl}/api/${id}`)
	console.log(data)
	return data
}