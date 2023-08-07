/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Button, Typography } from '@mui/material'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'

import { useAppContext } from '../../context/context'
import { updateList, deleteList } from '../../redux/actions/list.action'
import { height } from '../../styles/dimensions'
import Confirm from '../dialogs/Confirm'

const styles = css`
	height: ${height.bar}px;
	z-index: 1;

	display: flex;
	justify-content: center;
	align-items: center;
	flex-shrink: 0;

	background-color: #333;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
	button {
		width: 160px;
		margin: 0 5px;
	}
`

export default function Footer() {
	const [showConfirmDialog, setShowConfirmDialog] = useState(false)
	const { user } = useAppContext()

	const dispatch = useDispatch()
	const location = useLocation()
	const currentPath = location.pathname

	const handleUpdate = () => {
		dispatch(updateList())
	}
	const handleDelete = () => {
		setShowConfirmDialog(true)
	}

	const handleConfirmDelete = () => {
		dispatch(deleteList())
		setShowConfirmDialog(false)
	}
	const handleCancelDelete = () => {
		setShowConfirmDialog(false)
	}

	return (
		<footer css={styles}>
			{currentPath === '/' && user ? (
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
			<Confirm
				title="Delete confirmation"
				text="Are you sure you want to delete all elements?"
				open={showConfirmDialog}
				onNo={handleCancelDelete}
				onYes={handleConfirmDelete}
			/>
		</footer>
	)
}
