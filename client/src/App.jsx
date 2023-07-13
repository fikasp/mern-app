import React, {useEffect} from 'react'
import axios from 'axios'

export default function App() {

	useEffect( () => {
		axios.get('http://localhost:5000/api')
			.then(res => console.log(res.data.api))
			.catch(error => {
				console.log(error)
			});
	},[])

	return (
		<div className='container'>
			<h1>Pantriest</h1>
		</div>
	)
}
