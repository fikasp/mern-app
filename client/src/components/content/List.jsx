/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useContext } from 'react';
import Context from '../../context/context';
import Item from './Item'

const styles = css`
	text-align: center;
	overflow: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 10px;
	gap: 10px;
`

const List = () => {
	const {data} = useContext(Context)

  return (
		<ul css={styles}>
			{
			Array.isArray(data) && data.length > 0 ? 
			(
				data.map(item => (
					<Item 
						key={item.id}
						id={item.id}
						value={item.value}
						done={item.done}
					/>
				))
			) 
			: 
			(
				"List is empty"
			)
			}
		</ul>
	)
}

export default List