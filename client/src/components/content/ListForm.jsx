/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { TextField } from '@mui/material'

import { createListItem } from '../../redux/actions/list.action'
import { useAppContext } from '../../context/context'

const styles = css`
	width: 320px;
	margin: 20px;
	input {
		text-align: left;
	}
`

export default function Form() {
	const dispatch = useDispatch()

	const initialFormData = {
		name: '',
	}
	const [formData, setFormData] = useState(initialFormData)

	const handleChange = (evt) => {
		setFormData({ ...formData, [evt.target.name]: evt.target.value })
	}

	const handleKeyDown = (evt) => {
		if (evt.key === 'Enter') {
			dispatch(createListItem(formData))
			setFormData(initialFormData)
		}
	}

	return (
		<TextField
			css={styles}
			name="name"
			onChange={handleChange}
			onKeyDown={handleKeyDown}
			label="Add element do the list and press Enter"
			variant="outlined"
			value={formData.name}
		/>
	)
}
