/** @jsxImportSource @emotion/react */
import { useState, useContext } from 'react';
import TextField from '@mui/material/TextField';
import Context from '../../context/context';

const Form = () => {

  const [name, setName] = useState("")
  const {handleAdd} = useContext(Context)

  const handleChange = (evt) => {
    const value = evt.target.value
    setName(value)
  }

  const handleKeyDown = (evt) => {
    if (evt.key === "Enter") {
      handleAdd(name)
      setName("")
    }
  }

  return (
		<TextField
      sx={{margin: '10px', input: {textAlign: "center"}}}
      onChange={handleChange} 
      onKeyDown={handleKeyDown}
      label="Add element"
      variant="outlined"
      value={name} 
    />
	)
}

export default Form