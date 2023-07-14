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

const Container = ({color, children}) => (
	<div css={styles(color)}>
		{children}
	</div>
)

export default Container