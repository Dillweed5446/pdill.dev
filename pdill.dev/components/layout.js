import React from 'react'
import Sidebar from './sidebar'
import PropTypes from 'prop-types'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../src/theme'

export default function MyLayout ({ children }) {
  return (
    <>
      <ThemeProvider theme={theme} >
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Sidebar/>
        <div>
          {children}
        </div>
      </ThemeProvider>
    </>
  )
}

MyLayout.propTypes = {
  children: PropTypes.node.isRequired
}
