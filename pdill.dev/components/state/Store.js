import React, { createContext, useReducer } from 'react'
import Reducer from './Reducer'
import PropTypes from 'prop-types'

const initialState = {
  location: [],
  data: [],
  error: null,
  page: 1,
  firstData: 0,
  lastData: 23,
  firstTideData: 0,
  lastTideData: 3,
  sunData: 0,
  maxPage: 8
}

export const Context = createContext(initialState)

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState)
  return (
    <Context.Provider value={[state, dispatch]}>
      {children}
    </Context.Provider>
  )
}

Store.propTypes = {
  children: PropTypes.node.isRequired
}

export default Store
