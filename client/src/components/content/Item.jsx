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
  grid-template-columns: 40px 145px 45px;
  align-items: center;
	padding: 4px;
  & * {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
	& .text {
    line-height: 15px;
    font-size: 16px;
		color: white;
	}
  & .input {
    font-size: 16px;
		background-color: #222;
		color: white;
	}
  & .done {
    text-decoration: line-through;
    color: #888;
  }
  & .checkbox {
    height: 14px;
  }
`
const Item = ({ id, value, done }) => {
  const { handleUpdate, handleDelete, handleDone } = useContext(Context)
  const [isEditing, setIsEditing] = useState(false)
  const inputRef = useRef(null)

  console.log("Render");

  useEffect(() => {
    if (isEditing) {
      inputRef.current.select()
    }
  }, [isEditing])

  const handleCheckboxChange = (evt) => {
    handleDone(id, evt.target.checked)
  }

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
      <input
        type='checkbox'
        className="checkbox"
        onChange={handleCheckboxChange}
        checked={done}
      />
      {
        isEditing ?
          (
            // edit mode
            <>
              <input
                type='text'
                className={`input${done?' done' : ''}`}
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
              <div 
                className={`text${done?' done' : ''}`} 
                onDoubleClick={handleEdit}
                >{value}
              </div>
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
