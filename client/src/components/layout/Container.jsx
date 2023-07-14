/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const styles = (color) => css`
	height: 50vh;
	width: 50vw;
	min-width: 450px;
	background-color: ${color};
	border-radius: 10px;
	overflow: hidden;
`;

export default function Container ({color, children}) {

  return (
		<div css={styles(color)}>{children}</div>
	)
}