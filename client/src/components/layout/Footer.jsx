/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Button } from '@mui/material'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'

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
	const location = useLocation()
	const currentPath = location.pathname

	console.log(currentPath);

	const handleClick = () => {
		dispatch(updateList())
	}

	return (
		<footer css={styles}>
			{currentPath === '/' && (
				<Button variant="contained" onClick={handleClick}>
					Update data
				</Button>
			)}
		</footer>
	)
}
