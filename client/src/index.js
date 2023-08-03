import React from 'react'
import ReactDOM from 'react-dom/client'
import { Global } from '@emotion/react'
import { Provider } from 'react-redux'
import { ContextProvider } from './context/context'
import { ThemeProvider } from '@mui/material/styles'

import global from './styles/global'
import theme from './styles/theme'
import store from './redux/store'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<Global styles={global} />
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<ContextProvider>
					<App />
				</ContextProvider>
			</ThemeProvider>
		</Provider>
	</React.StrictMode>
)
