import React from 'react'
import theme from '../src/theme'

export default function BoxModel ({children}) {
  return (
    <div theme={ theme } style={{
      width: '70%',
      border: '2em #20A4F3',
      padding: '0%',
      margin: '0%',
      backgroundColor: '#DAD2D8',
      boxSizing: 'content-box'
    }} >
      {children}
    </div>
  )
}
