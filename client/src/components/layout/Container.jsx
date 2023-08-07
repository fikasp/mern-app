/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { width } from '../../styles/dimensions'

const styles = (color) => css`
	display: flex;
	flex-direction: column;
	min-width: ${width.min}px;
	width: 100vw;
	height: 100vh;

	background-color: ${color};
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
	@media (min-width: ${width.media}px) {
		width: ${width.vw}vw;
		min-width: ${width.media}px;
		max-width: ${width.max}px;
	}
`

export default function Container({ color, children }) {
	return <div css={styles(color)}>{children}</div>
}
