/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useSelector } from 'react-redux'
import { appWidth, appMinWidth, appMaxWidth, headerHeight } from '../../styles/variables'

import Typography from '@mui/material/Typography'
import List from '../content/List'
import Form from '../content/Form'

const styles = css`
	height: calc(100% - ${headerHeight*2}px);
	overflow-x: hidden;
	overflow-y: auto;

	& > section {
		width: ${appWidth}vw;
		min-width: ${appMinWidth}px;
		max-width: ${appMaxWidth}px;
		padding: 10px;
	}
`

export default function Main() {
	const { isLoading, error } = useSelector((state) => state.api)

	return (
		<main css={styles}>
			<section>
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
			</section>
		</main>
	)
}
