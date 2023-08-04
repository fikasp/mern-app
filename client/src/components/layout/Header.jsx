/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Typography, Button } from '@mui/material'

import { height } from '../../styles/dimensions'
import * as actions from '../../redux/actions'
import logger from '../../utils/logger'

const styles = (backgroundColor) => css`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-shrink: 0;

	height: ${height.bar}px;
	background-color: ${backgroundColor};
	color: white;

	font-weight: bold;
	text-shadow: 0 0 5px black;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
	z-index: 1;
	transition: 0.5s;

	.left {
		display: flex;
		justify-content: left;
		align-items: center;
		width: 140px;
		height: 100%;
		padding-left: 20px;
	}
	.center {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 110px;
		height: 100%;
	}
	.right {
		display: flex;
		justify-content: right;
		align-items: center;
		width: 140px;
		height: 100%;
		padding-right: 10px;

		.button {
			width: 100px;
		}
	}
`

export default function Header({ title }) {
	const [backgroundColor, setBackgroundColor] = useState('gray')
	const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const location = useLocation()

	useEffect(() => {
		// token
		const token = user?.token

		// if (token) {
		//   const decodedToken = decode(token);

		//   if (decodedToken.exp * 1000 < new Date().getTime()) logout();
		// }

		setUser(JSON.parse(localStorage.getItem('profile')))

		// backgroud
		const interval = setInterval(() => {
			setBackgroundColor(
				`#${Math.floor(Math.random() * 16777215).toString(16)}`
			)
		}, 5000)

		return () => {
			clearInterval(interval)
		}
	}, [])

	const handleSignIn = () => {
		logger()
		navigate('/')
		setUser(true)
	}

	const handleSignOut = () => {
		logger()
		dispatch({ type: actions.AUTH_LOGOUT })
		navigate('/auth')
		setUser(null)
	}

	return (
		<header css={styles(backgroundColor)}>
			<div className="left">
				{user ? <Typography>Przemysław</Typography> : null}
			</div>
			<div className="center">{title}</div>
			<div className="right">
				{user ? (
					<Button
						color="primary"
						variant="contained"
						className="button"
						onClick={handleSignOut}
					>
						Sign Out
					</Button>
				) : (
					<Button
						color="secondary"
						variant="contained"
						className="button"
						onClick={handleSignIn}
					>
						Sign In
					</Button>
				)}
			</div>
		</header>
	)
}
