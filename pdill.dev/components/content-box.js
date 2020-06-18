import React from 'react'
import theme from '../src/theme'

export default function BoxModel ({children}) {
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
