/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Typography, Button } from '@mui/material'

import { useAppContext } from '../../context/context'
import { height } from '../../styles/dimensions'
import * as actions from '../../redux/actions'
import decode from 'jwt-decode'

const styles = (backgroundColor) => css`
	height: ${height.bar}px;
	z-index: 1;

	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-shrink: 0;

	background-color: ${backgroundColor};
	color: white;

	font-weight: bold;
	text-shadow: 0 0 5px black;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
	transition: background-color 0.5s;

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
			width: 120px;
		}
	}
`

export default function Header({ title }) {
	const [backgroundColor, setBackgroundColor] = useState('gray')
	const { user, setUser } = useAppContext()
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const location = useLocation()

	useEffect(() => {
		// token
		const token = user?.token

		if (token) {
			const decodedToken = decode(token)
			if (decodedToken.exp * 1000 < new Date().getTime()) handleSignOut()
		}

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
	}, [location])

	const handleSignIn = () => {
		navigate('/auth')
	}

	const handleSignOut = () => {
		dispatch({ type: actions.AUTH_LOGOUT })
		dispatch({ type: actions.LIST_DELETE_ALL })
		navigate('/auth')
		setUser(null)
	}

	return (
		<header css={styles(backgroundColor)}>
			<div className="left">
				{user ? <Typography>{user.result.firstName}</Typography> : null}
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
