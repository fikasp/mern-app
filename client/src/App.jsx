import React, {useEffect, useState} from 'react'
import axios from 'axios'

export default function App() {

	const [title, setTitle] = useState()

	useEffect( () => {
		axios.get('https://pantriest-5e5792f21397.herokuapp.com/api')
			.then(response => response.json())
			.then(data => setTitle(data.api))
			.catch(error => {
				console.log(error)
			});
	},[])

	return (
		<div className='container'>
			<h1>{title}</h1>
		</div>
	)
}
