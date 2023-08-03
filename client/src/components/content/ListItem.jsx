/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useState, useRef, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import SaveIcon from '@mui/icons-material/Save'
import CancelIcon from '@mui/icons-material/Cancel'

import { updateListItem, deleteListItem } from '../../redux/actions/list.action'
import ConfirmModal from '../helpers/ConfirmModal'

const styles = css`
	display: grid;
	grid-template-columns: 40px 240px 50px;
	align-items: center;
	padding: 4px;
	* {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.text {
		line-height: 15px;
		font-size: 16px;
		color: white;
	}
	.input {
		font-size: 16px;
		background-color: #222;
		color: white;
	}
	.done {
		text-decoration: line-through;
		color: #888;
	}
	.checkbox {
		height: 14px;
	}
`
export default function ListItem({ id, done, name }) {
	const dispatch = useDispatch()
	const [isEditing, setIsEditing] = useState(false)
	const [showConfirmDialog, setShowConfirmDialog] = useState(false)
	const inputRef = useRef(null)

	useEffect(() => {
		if (isEditing) {
			inputRef.current.select()
		}
	}, [isEditing])

	const handleCheckboxChange = (evt) => {
		dispatch(updateListItem(id, 'done', evt.target.checked))
	}

	const handleEdit = () => {
		setIsEditing(true)
	}

	const handleSave = async () => {
		await dispatch(updateListItem(id, 'name', inputRef.current.value))
		setIsEditing(false)
	}

	const handleCancel = () => {
		setIsEditing(false)
	}

	const handleDelete = () => {
		if (done) {
			dispatch(deleteListItem(id))
		} else {
			setShowConfirmDialog(true)
		}
	}

	const handleConfirmDelete = () => {
		dispatch(deleteListItem(id))
		setShowConfirmDialog(false)
	}

	const handleCancelDelete = () => {
		setShowConfirmDialog(false)
	}

	const handleKeyDown = (e) => {
		if (e.key === 'Enter') {
			handleSave()
		} else if (e.key === 'Escape') {
			handleCancel()
		}
	}

	return (
		<li css={styles}>
			<input
				type="checkbox"
				className="checkbox"
				onChange={handleCheckboxChange}
				checked={done}
			/>
			{isEditing ? (
				// edit mode
				<>
					<input
						type="text"
						className={`input${done ? ' done' : ''}`}
						ref={inputRef}
						onKeyDown={handleKeyDown}
						defaultValue={name}
					/>
					<div>
						<SaveIcon fontSize="small" onClick={handleSave} />
						<CancelIcon fontSize="small" onClick={handleCancel} />
					</div>
				</>
			) : (
				// normal mode
				<>
					<div
						className={`text${done ? ' done' : ''}`}
						onDoubleClick={handleEdit}
					>
						{name}
					</div>
					<div>
						<EditIcon fontSize="small" onClick={handleEdit} />
						<DeleteIcon fontSize="small" onClick={handleDelete} />
					</div>
				</>
			)}
			<ConfirmModal
				title="Delete confirmation"
				text="Are you sure you want to delete this item?"
				open={showConfirmDialog}
				onNo={handleCancelDelete}
				onYes={handleConfirmDelete}
			/>
		</li>
	)
}
