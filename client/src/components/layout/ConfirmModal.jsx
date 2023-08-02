import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

export default function ConfirmModal ({ title, text, open, onNo, onYes }) {
  return (
    <Dialog open={open} onClose={onNo}>
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

