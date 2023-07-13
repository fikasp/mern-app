import React, {useEffect} from 'react'
import axios from 'axios'

export default function App() {

	const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000'
	console.log(apiUrl)
	
	useEffect( () => {
		axios.get(`${apiUrl}/api`)
			.then(res => console.log(res.data.api))
			.catch(error => {
				console.log(error)
			});
	},[apiUrl])

	return (
		<div className='container'>
			<h1>Pantriest works...</h1>
		</div>
	)
}
