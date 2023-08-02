/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Button from '@mui/material/Button'

import { useDispatch } from 'react-redux'
import { updateList } from '../../redux/actions/list.action'

const styles = css`
	height: 50px;
	background-color: #444;
	display: flex;
	justify-content: center;
	align-items: center;
`

export default function Footer() {
	const dispatch = useDispatch()

	const handleClick = () => {
		dispatch(updateList())
	}

	return (
		<footer css={styles}>
			<Button onClick={handleClick}>Update</Button>
		</footer>
	)
}
