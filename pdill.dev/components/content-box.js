import React, { Children } from 'react'

export default function BoxModel () {
  return (
    <div style={{
      width: "70%",
      border: "2em primary",
      padding: "10%",
      margin: "0%"
    }} >
      {...Children}
    </div>
  )
}
