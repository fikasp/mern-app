/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useState, useContext, useRef, useEffect } from 'react'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import SaveIcon from '@mui/icons-material/Save'
import CancelIcon from '@mui/icons-material/Cancel'
import Context from '../../context/context'

const styles = css`
  display: grid;
  grid-template-columns: 20px 145px 45px;
	padding: 4px;
  & * {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
	& input {
    font-size: 15px;
		background-color: #222;
		color: white;
	}
`
const Item = ({ id, value }) => {
  const {handleUpdate, handleDelete} = useContext(Context)
  const [isEditing, setIsEditing] = useState(false)
	const inputRef = useRef(null)

	useEffect(() => {
    if (isEditing) {
      inputRef.current.select()
    }
  }, [isEditing])

  const handleEdit = () => {
    setIsEditing(true)
  }

  const handleSave = async () => {
    await handleUpdate(id, inputRef.current.value)
		setIsEditing(false)
  }

  const handleCancel = () => {
    setIsEditing(false)
  }

	const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSave()
    } else if (e.key === 'Escape') {
      handleCancel()
    }
  }

  return (
    <li css={styles}>
      <div>{id}</div>
      {
      isEditing ? 
      (
        // edit mode
        <>
          <input 
            type='text'
            ref={inputRef}
            onKeyDown={handleKeyDown}
            defaultValue={value}
          />
          <div>
            <SaveIcon fontSize='small' onClick={handleSave} />
            <CancelIcon fontSize='small' onClick={handleCancel} />
          </div>
        </>
      ) 
      : 
      (
        // normal mode
        <>
          <div onDoubleClick={handleEdit}>{value}</div>
          <div>
            <EditIcon fontSize='small' onClick={handleEdit} />
            <DeleteIcon fontSize='small' onClick={handleDelete(id)} />
          </div>
        </>
      )
      }
    </li>
  )
}

export default Item
