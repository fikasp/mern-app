/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const styles = css`
	display: grid;
	grid-template-columns: 10px 150px 10px;
`

const ListItem = ({id, name, edit}) => {
	
  return (
		<li css={styles}>
			<div>{id}</div>
			<div>{name}</div>
		</li>
	)
}

export default ListItem