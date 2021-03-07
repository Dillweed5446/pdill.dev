import React from 'react'
import theme from '../src/theme'
import PropTypes from 'prop-types'

export default function BoxModel ({ children }) {
  return (
    <div className="content-box" theme={ theme } >
      {children}
      <style jsx>{`
      .content-box {
        width: 70%;
        border: 1em groove #20A4F3;
        padding: 2%;
        margin: 4% 4% 2% 4%;
        background-color: #DAD2D8;
        box-sizing: content-box;
      },
      @media screen and (max-width: 500px) .content-box {
        width: 100%;
        border: 1em groove #20A4F3;
        padding: 2%;
        margin: 0%;
        background-color: #DAD2D8;
        box-sizing: content-box;
      }
        `}</style>
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
