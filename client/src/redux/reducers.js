import { combineReducers } from 'redux'
import api from './reducers/api.reducer'
import auth from './reducers/auth.reducer'
import list from './reducers/list.reducer'

export default combineReducers({
	api,
	auth,
	list,
})
