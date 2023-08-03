import { css } from '@emotion/react'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'

const global = css`
	* {
		margin: 0;
		padding: 0;
		border: 0;
		outline: 0;
		font: inherit;
		font-size: 100%;
		line-height: 1;
		vertical-align: baseline;
		text-decoration: none;
		list-style: none;
		box-sizing: border-box;
		border-spacing: 0;
	}
	html {
		color: white;
		background-color: #111;
		font-family: 'Roboto', sans-serif;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}
`
export default global
