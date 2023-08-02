/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const styles = (color) => css`
	height: 50vh;
	width: 50vw;
	min-width: 300px;
	background-color: ${color};
	border-radius: 10px;
	overflow: hidden;
	flex-direction: column;
	text-align: center;
	display: flex;
`

export default function Container({ color, children }) {
	return <div css={styles(color)}>{children}</div>
}
