import { combineReducers } from 'redux'
import loading from './reducers/loading.reducer'
import list from './reducers/list.reducer'

export default combineReducers({ 
  loading,
  list
})