import { array } from "prop-types"

const Reducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOCATION':
      return {
        ...state,
        location: []
      }
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: Boolean
      }
    case 'SET_DATA':
      return {
        ...state,
        data: action.payload
      }
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload
      }
    case 'RESET':
      return {
        ...state
      }
    default:
      return state
  }
}

export default Reducer
