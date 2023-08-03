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
	}
`

export default function ConfirmModal({ title, text, open, onNo, onYes }) {
	return (
		<Dialog css={styles} open={open} onClose={onNo}>
			<DialogTitle>{title}</DialogTitle>
			<DialogContent>
				<DialogContentText>{text}</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={onNo} color="primary">
					No
				</Button>
				<Button onClick={onYes} color="primary" autoFocus>
					Yes
				</Button>
			</DialogActions>
		</Dialog>
	)
}
