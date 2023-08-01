import { combineReducers } from 'redux'

import listReducer from './reducers/list.reducer'
import loadingReducer from './reducers/loading.reducer'

export default combineReducers({ 
  list: listReducer,
  loading: loadingReducer
})