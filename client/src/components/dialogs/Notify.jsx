/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from '@mui/material'

const styles = css`
	.MuiPaper-root {
		background-color: rgba(10, 10, 10, 0.9);
		text-align: center;
	}
`

export default function Notify({ title, text, open, close }) {

	return (
		<Dialog css={styles} open={open} onClose={close}>
			<DialogTitle>{title}</DialogTitle>
			<DialogContent>
				<DialogContentText>{text}</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={close} color="primary" autoFocus>
					OK
				</Button>
			</DialogActions>
		</Dialog>
	)
}
