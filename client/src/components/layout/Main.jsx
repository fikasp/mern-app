/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useSelector } from 'react-redux'
import { Box, Typography } from '@mui/material'

import { useAppContext } from '../../context/context'
import { height } from '../../styles/dimensions'
import List from '../content/List'
import Form from '../content/ListForm'

const styles = css`
	height: calc(100vh - ${height.bar}px);
	padding: 10px 0;
	overflow-y: auto;

	display: flex;
	flex-direction: column;
	text-align: center;

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
	const { user } = useAppContext()

	return (
		<main css={styles}>
			{!user? (
				<Typography className="text">Please sign in</Typography>
			) : isLoading ? (
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
