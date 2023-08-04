/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { width, height } from '../../styles/dimensions'

const styles = (color) => css`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: stretch;
	overflow: hidden;

	width: ${width.vw}vw;
	min-width: ${width.min}px;
	max-width: ${width.max}px;
	height: ${height.app}px;
	max-height: calc(90vh);

	background-color: ${color};
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
	border-radius: 10px;
`

export default function Container({ color, children }) {
	return <div css={styles(color)}>{children}</div>
}
