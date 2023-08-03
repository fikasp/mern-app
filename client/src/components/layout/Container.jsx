/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import {
	appHeight,
	appWidth,
	appMinWidth,
	appMaxWidth,
} from '../../styles/variables'

const styles = (color) => css`
	height: ${appHeight}vh;
	width: ${appWidth}vw;
	min-width: ${appMinWidth}px;
	max-width: ${appMaxWidth}px;
	background-color: ${color};
	border-radius: 5px;
	overflow: hidden;
	flex-direction: column;
	text-align: center;
	display: flex;
`

export default function Container({ color, children }) {
	return <div css={styles(color)}>{children}</div>
}
