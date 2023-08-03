/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Typography } from '@mui/material'

import { headerHeight } from '../../styles/variables'

const styles = css`
	height: calc(100% - ${headerHeight * 2}px);
	display: flex;
	justify-content: center;
	align-items: center;
`

export default function Auth() {
	return (
		<main css={styles}>
			<Typography>Please Log In</Typography>
		</main>
	)
}
