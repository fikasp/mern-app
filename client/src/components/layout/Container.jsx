/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import {
	appHeight,
	appWidth,
	appMinWidth,
	appMaxWidth,
} from '../../styles/variables'

const styles = (color) => css`
	width: ${appWidth}vw;
	min-width: ${appMinWidth}px;
	max-width: ${appMaxWidth}px;
	min-height: ${appHeight}vh;
	background-color: ${color};
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
	border-radius: 10px;
	overflow: hidden;
	flex-direction: column;
	text-align: center;
	display: flex;
`

export default function Container({ color, children }) {
	return <div css={styles(color)}>{children}</div>
}
