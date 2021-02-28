import React, { createContext, useReducer } from 'react'
import Reducer from './Reducer'
import PropTypes from 'prop-types'

const initialState = {
  location: [21.3, -157.8], // Honaunau Bay
  // location: [19.5, -155.9], // Kealakekua Bay
  // location: [19.73, -155.07], // Hilo Bay
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
