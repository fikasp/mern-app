/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useState, useEffect } from 'react'
import { headerHeight } from '../../styles/variables'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

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
				<Button variant="contained" className="button" onClick={handleClick}>
					{user ? 'Log out' : 'Log in'}
				</Button>
			</div>
		</header>
	)
}
