import React from 'react'
import { initGA, logPageView } from '../utils/analytics'
import PropTypes from 'prop-types'

export default class Layout extends React.Component {
  componentDidMount () {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  }

  render () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}
