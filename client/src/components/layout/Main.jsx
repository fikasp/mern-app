/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useSelector } from 'react-redux'
import { Box, Typography } from '@mui/material'

import { width, height } from '../../styles/dimensions'
import List from '../content/List'
import Form from '../content/ListForm'

const styles = css`
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	text-align: center;
	overflow-y: auto;
	padding: 10px 0;

	.box-form {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-shrink: 0;
	}

	.box-list {
		flex-grow: 1;
		overflow-x: hidden;
		overflow-y: scroll;
	}
`

export default function Main() {
	const { isLoading, error } = useSelector((state) => state.api)

	return (
		<main css={styles}>
			{isLoading ? (
				<Typography className="text">Ładowanie danych...</Typography>
			) : error ? (
				<Typography className="text">Error... {error.message}</Typography>
			) : (
				<>
					<Box className="box-form">
						<Form />
					</Box>
					<Box className="box-list">
						<List />
					</Box>
				</>
			)}
		</main>
	)
}
