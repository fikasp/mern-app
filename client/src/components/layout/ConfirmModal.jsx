/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

const styles = css`
  & .MuiPaper-root {
    background-color: rgba(20,20,20,0.9);
    box-shadow: 0px 0px 5px 5px #111;
  }
  & .MuiTypography-root {
    color: #ccc;
  }
`

export default function ConfirmModal ({ title, text, open, onNo, onYes }) {

  return (
    <Dialog css={styles} open={open} onClose={onNo}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{text}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onNo} color="primary">No</Button>
        <Button onClick={onYes} color="primary" autoFocus>Yes</Button>
      </DialogActions>
    </Dialog>
  )
}

