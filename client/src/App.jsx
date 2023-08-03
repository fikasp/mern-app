import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { readList } from './redux/actions/list.action'

import Container from './components/layout/Container'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Main from './components/layout/Main'

import Auth from './components/auth/Auth'

export default function App() {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(readList())
	}, [dispatch])

	return (
		<BrowserRouter>
			<Container color="#222">
				<Header title="MERN APP" />
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/auth" element={<Auth />} />
				</Routes>
				<Footer />
			</Container>
		</BrowserRouter>
	)
}
