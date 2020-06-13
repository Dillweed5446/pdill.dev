import React from 'react'

export default function BoxModel ({children}) {
  return (
    <div style={{
      height: "100%",
      width: "70%",
      border: "2em primary",
      padding: "10%",
      margin: "0%"
    }} >
      {children}
    </div>
  )
}
