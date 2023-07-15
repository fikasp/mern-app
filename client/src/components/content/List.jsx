/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import ListItem from './Item'

const styles = css`
	text-align: center;
	overflow: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 10px;
	gap: 10px;
`

const List = ({data, remove}) => {
	
  return (
		<ul css={styles}>
			{data?.length > 0 ?
				data.map(item => (
				<ListItem 
					key={item.id}
					id={item.id}
					name={item.name}
					remove={remove}/>
			))
			: "List is empty"
			}
		</ul>
	)
}

export default List