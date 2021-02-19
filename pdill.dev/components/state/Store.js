import React, { createContext, useReducer } from 'react'
import Reducer from './Reducer'
import PropTypes from 'prop-types'

const initialState = {
  location: [21.3, -157.8], // Honaunau Bay
  data: [],
  error: null
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
