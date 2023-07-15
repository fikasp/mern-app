/** @jsxImportSource @emotion/react */
import {useState} from 'react';
import TextField from '@mui/material/TextField';


const Form = ({add}) => {

  const [name, setName] = useState("")

  const handleChange = (evt) => {
    const value = evt.target.value
    console.log(value);
    setName(value)
  }

  const handleKeyDown = (evt) => {
    if (evt.key === "Enter") {
      console.log("Enter pressed");
      add(name)
      setName("")
    }
  }

  return (
		<TextField 
      sx={{margin: '10px', input: {textAlign: "center"}}}
      InputLabel={{sx: {textAlign: "center"}}}
      onChange={handleChange} 
      onKeyDown={handleKeyDown}
      label="Add element"
      variant="outlined"
      value={name} 
    />
	)
}

export default Form