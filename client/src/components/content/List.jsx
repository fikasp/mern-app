/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useDispatch, useSelector } from 'react-redux'

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

export default function List () {
	const dispatch = useDispatch()
	const data = useSelector(store => store.list)

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