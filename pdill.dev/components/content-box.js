import React from 'react'

export default function BoxModel ({children}) {
  return (
    <div style={{
      width: "70%",
      border: "2em primary",
      padding: "10%",
      margin: "0%"
    }} >
      {children}
    </div>
  )
}
