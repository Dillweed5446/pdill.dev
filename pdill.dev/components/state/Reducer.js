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
    case 'SET_PAGE':
      return {
        ...state,
        page: action.page
      }
    case 'SET_FIRST_DATA_POINT':
      return {
        ...state,
        firstData: action.firstData
      }
    case 'SET_LAST_DATA_POINT':
      return {
        ...state,
        lastData: action.lastData
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
