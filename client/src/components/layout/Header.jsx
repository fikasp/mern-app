/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Typography, Button } from '@mui/material'

import { headerHeight } from '../../styles/variables'

const styles = (backgroundColor) => css`
	height: ${headerHeight}px;
	color: white;
	background-color: ${backgroundColor};
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-weight: bold;
	text-shadow: 0 0 5px black;
	transition: 0.5s;

	& .left {
		width: 140px;
		height: 100%;
		padding-left: 20px;
		display: flex;
		justify-content: left;
		align-items: center;
	}
	& .center {
		width: 110px;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	& .right {
		width: 140px;
		height: 100%;
		padding-right: 10px;
		display: flex;
		justify-content: right;
		align-items: center;
		& .button {
			width: 100px;
		}
	}
`

export default function Header({ title }) {
	const [backgroundColor, setBackgroundColor] = useState('gray')
	const [user, setUser] = useState(false)

	useEffect(() => {
		const interval = setInterval(() => {
			setBackgroundColor(
				`#${Math.floor(Math.random() * 16777215).toString(16)}`
			)
		}, 5000)

		return () => {
			clearInterval(interval)
		}
	}, [])

	const handleClick = () => {
		setUser(!user)
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
						component={Link}
						to="/auth"
						variant="contained"
						className="button"
						onClick={handleClick}
					>
						Log Out
					</Button>
				) : (
					<Button
						component={Link}
						to="/"
						variant="contained"
						className="button"
						onClick={handleClick}
					>
						Log In
					</Button>
				)}
			</div>
		</header>
	)
}
