/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { TextField } from '@mui/material'

import { createListItem } from '../../redux/actions/list.action'

const styles = css`
	width: 330px;
	margin: 10px;
	/* .MuiFormLabel-root {
		color: gray;
	}
	.MuiFormLabel-root.Mui-focused {
		color: red;
	}
	.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline {
		border-color: #444;
	}
	.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
		border-color: red;
	} */
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
			label="Add element do the list"
			variant="outlined"
			value={formData.name}
		/>
	)
}
