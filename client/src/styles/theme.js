import { createTheme } from '@mui/material/styles'
import { red, blue } from '@mui/material/colors'

const theme = createTheme({
	palette: {
		mode: 'dark',
		primary: red,
		secondary: blue,
		background: {
			paper: '#222',
			default: '#222',
		},
	},
	components: {
	},
})

export default theme
