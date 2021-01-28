const Reducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOCATION':
      return {
        ...state,
        location: action.payload
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
