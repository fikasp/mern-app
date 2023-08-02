/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { createListItem } from '../../redux/actions/list.action'
import TextField from '@mui/material/TextField'

const styles = css`
  
  margin-bottom: 10px;
  & input {
    color: white;
  }
  & .MuiFormLabel-root {
    color: gray;
  }
`

export default function Form() {
  const dispatch = useDispatch()

  const initialFormData = {
    name: ''
  }
  const [formData, setFormData] = useState(initialFormData)

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleKeyDown = (evt) => {
    if (evt.key === "Enter") {
      dispatch(createListItem(formData))
      setFormData(initialFormData)
    }
  }

  return (
    <TextField
      css={styles}
      name="name"
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      label="Add element do the list"
      variant="outlined"
      value={formData.name}
    />
  )
}