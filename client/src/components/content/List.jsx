/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useSelector } from 'react-redux'

import ListItem from './ListItem'

const styles = css`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	font-size: 18px;
	gap: 10px;
`

export default function List() {
	const list = useSelector((store) => store.list)
	const reversedList = Array.isArray(list) ? list.slice().reverse() : []
	return (
		<ul css={styles}>
			{reversedList.length > 0
				? reversedList.map((item) => (
						<ListItem
							key={item._id}
							id={item._id}
							name={item.name}
							done={item.done}
						/>
				  ))
				: 'List is empty'}
		</ul>
	)
}
