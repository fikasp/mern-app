/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import DeleteIcon from '@mui/icons-material/Delete';

const styles = css`
	display: grid;
	grid-template-columns: 30px 150px 30px;
	& div {
		display: flex;
		justify-content: center;
		align-items: center;
	}
`

const ListItem = ({id, name, remove}) => {
	
  return (
		<li css={styles}>
			<div>{id}</div>
			<div>{name}</div>
			<div onClick={remove(id)}><DeleteIcon fontSize="small"/></div>
		</li>
	)
}

export default ListItem