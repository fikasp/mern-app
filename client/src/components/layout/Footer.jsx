/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Button, Typography } from '@mui/material'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'

import { updateList, deleteList } from '../../redux/actions/list.action'
import { height } from '../../styles/dimensions'

const styles = css`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-shrink: 0;

	height: ${height.bar}px;
	background-color: #333;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
	z-index: 1;
	button {
		width: 160px;
		margin: 0 5px;
	}
`

export default function Footer() {
	const dispatch = useDispatch()
	const location = useLocation()
	const currentPath = location.pathname

	console.log(currentPath)

	const handleUpdate = () => {
		dispatch(updateList())
	}
	const handleDelete = () => {
		dispatch(deleteList())
	}

	return (
		<footer css={styles}>
			{currentPath === '/' ? (
				<>
					<Button variant="contained" color="secondary" onClick={handleUpdate}>
						Update data
					</Button>
					<Button variant="contained" color="secondary" onClick={handleDelete}>
						Clear data
					</Button>
				</>
			) : (
				<Typography>ARWcode &copy;2023</Typography>
			)}
		</footer>
	)
}
