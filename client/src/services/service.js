import axios from 'axios'

const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000'

async function getData() {
	const response = await axios.get(`${apiUrl}/api`)
	return response.data
}

async function addData(name) {
	const response = await axios.post(`${apiUrl}/api`, {name})
	console.log(response)
}

async function deleteData(id) {
	const response = await axios.delete(`${apiUrl}/api/${id}`)
	console.log(response)
}

// eslint-disable-next-line
export default {
	getData, 
	addData, 
	deleteData
}