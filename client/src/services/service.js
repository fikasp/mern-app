import axios from 'axios'

const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000'

export async function getData() {
	const response = await axios.get(`${apiUrl}/api`)
	return response.data
}

