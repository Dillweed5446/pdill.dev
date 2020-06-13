import React from 'react'
import theme from '../src/theme'

export default function BoxModel ({children}) {
  return (
    <div style={{
      width: "70%",
      border: "2em primary",
      padding: "0%",
      margin: "0%",
      backgroundColor: "background.default",
      boxSizing: 'content-box'
    }} >
      {children}
    </div>
  )
}
