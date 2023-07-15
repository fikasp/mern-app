/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useContext } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import Context from '../../context/context';

const styles = css`
	display: grid;
	grid-template-columns: 30px 150px 30px;
	& div {
		display: flex;
		justify-content: center;
		align-items: center;
	}
`

const ListItem = ({id, name}) => {
	
	const {handleRemove} = useContext(Context)

  return (
		<li css={styles}>
			<div>{id}</div>
			<div>{name}</div>
			<div onClick={handleRemove(id)}><DeleteIcon fontSize="small"/></div>
		</li>
	)
}

export default ListItem