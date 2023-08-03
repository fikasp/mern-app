/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useSelector } from 'react-redux'
import { Typography } from '@mui/material'

import { width, height } from '../../styles/variables'
import List from '../content/List'
import Form from '../content/ListForm'

const styles = css`
	display: flex;
	flex-direction: column;
	align-items: center;
	flex-grow: 1;

	width: ${width.app}vw;
	min-width: ${width.min}px;
	max-width: ${width.max}px;
	padding: 20px;
	
	overflow-x: hidden;
	overflow-y: auto;
`

export default function Main() {
	const { isLoading, error } = useSelector((state) => state.api)

	return (
		<main css={styles}>
			{isLoading ? (
				<Typography>Ładowanie danych...</Typography>
			) : error ? (
				<Typography>Error... {error.message}</Typography>
			) : (
				<>
					<Form />
					<List />
				</>
			)}
		</main>
	)
}
