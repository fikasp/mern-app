/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const styles = css`
	text-align: center;
	padding: 10px;
	& li {
		padding: 5px;
	}
`

const List = ({data}) => {
	
  return (
		<ul css={styles}>
			{data?.map(el => (
				<li key={el.id}>{el.name}</li>
			))
			}
		</ul>
	)
}

export default List