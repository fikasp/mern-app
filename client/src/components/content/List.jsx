/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import ListItem from './ListItem'

const styles = css`
	text-align: center;
	overflow: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 10px;
`

const List = ({data}) => {
	
  return (
		<ul css={styles}>
			{data?.length > 0 ?
				data.map(item => (
				<ListItem 
					key={item.id}
					id={item.id}
					name={item.name}/>
			))
			: "List is empty"
			}
		</ul>
	)
}

export default List