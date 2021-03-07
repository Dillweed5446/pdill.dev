import React from 'react'
import theme from '../src/theme'
import PropTypes from 'prop-types'

export default function BoxModel ({ children }) {
  return (
    <div theme={ theme } style={{
      width: '70%',
      border: '1em groove #20A4F3',
      padding: '2%',
      margin: '4% 4% 2% 4%',
      backgroundColor: '#DAD2D8',
      boxSizing: 'content-box'
    }} >
      {children}
    </div>
  )
}

BoxModel.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
    PropTypes.object,
    PropTypes.func
  ])
}
