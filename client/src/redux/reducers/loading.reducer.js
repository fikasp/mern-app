import { LOADING, ERROR } from '../actions'

const initialState = {
  isLoading: false,
  error: null,
}

export default function loadingReducer(state = initialState, action) {
  switch (action.type) {

    case LOADING:
      return { ...state, isLoading: action.payload }

    case ERROR:
      return { ...state, error: action.payload }

    default:
      return state
  }
}
