import { API_LOADING, API_ERROR } from '../actions'

const initialState = {
  isLoading: false,
  error: null,
}

export default function apiReducer(state = initialState, action) {
  switch (action.type) {

    case API_LOADING:
      console.log(API_LOADING, action.payload)
      return { ...state, isLoading: action.payload }

    case API_ERROR:
      console.log(API_ERROR, action.payload)
      return { ...state, error: action.payload }

    default:
      return state
  }
}
