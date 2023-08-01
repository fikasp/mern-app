/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useState } from 'react';

import TextField from '@mui/material/TextField';

const styles = css`
  margin: 10px;
  & input {
    color: white;
  }
  & .MuiFormLabel-root {
    color: gray;
  }
`

export default function Form () {

  const [name, setName] = useState("")

  const handleChange = (evt) => {
    const value = evt.target.value
    setName(value)
  }

  const handleKeyDown = (evt) => {
    if (evt.key === "Enter") {
      setName("")
    }
  }

  return (
		<TextField
      css={styles}
      onChange={handleChange} 
      onKeyDown={handleKeyDown}
      label="Add element"
      variant="outlined"
      value={name} 
    />
	)
}