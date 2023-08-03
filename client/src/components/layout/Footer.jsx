/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Button from '@mui/material/Button'

import { useDispatch } from 'react-redux'
import { updateList } from '../../redux/actions/list.action'
import { headerHeight } from '../../styles/variables'

const styles = css`
	height: ${headerHeight}px;
	background-color: #333;
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
			<Button variant="contained" onClick={handleClick}>Update data</Button>
		</footer>
	)
}
