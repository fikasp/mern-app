import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import api from './reducers/api.reducer'
import auth from './reducers/auth.reducer'
import list from './reducers/list.reducer'

const store = configureStore({
	reducer: {
		api,
		auth,
		list		
	},
	middleware: [thunk],
	devTools: true,
})

export default store
