/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useState, useContext } from 'react';
import TextField from '@mui/material/TextField';
import Context from '../../context/context';

const styles = css`
  margin: 10px;
  & input {
    color: white;
  }
  & .MuiFormLabel-root {
    color: gray;
  }
`

const Form = () => {

  const [name, setName] = useState("")
  const {handleCreate} = useContext(Context)

  const handleChange = (evt) => {
    const value = evt.target.value
    setName(value)
  }

  const handleKeyDown = (evt) => {
    if (evt.key === "Enter") {
      handleCreate(name)
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

export default Form