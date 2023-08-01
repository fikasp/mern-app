/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useSelector } from 'react-redux'

import ListItem from './ListItem'

const styles = css`
	text-align: center;
	overflow: auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 10px;
	gap: 10px;
`

export default function List () {
	const list = useSelector(store => store.list)

  return (
		<ul css={styles}>
			{
			Array.isArray(list) && list.length > 0 ? 
			(
				list.map(item => (
					<ListItem 
						key={item.id}
						id={item.id}
						name={item.name}
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