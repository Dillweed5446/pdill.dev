import React from 'react'

export default function BoxModel (props) {
  const { Component, pageProps } = props
  return (
    <div style={{
      width: "70%",
      border: "2em primary",
      padding: "10%",
      margin: "0%"
    }} >
      <Component {...pageProps} />
    </div>
  )
}
