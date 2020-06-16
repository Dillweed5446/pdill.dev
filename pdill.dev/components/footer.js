import React from 'react'
import Typography from '@material-ui/core/Typography'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { FaStackOverflow, FaWordpress } from 'react-icons/fa'
import { withStyles } from '@material-ui/core'

export default function Footer () {
  return (
    <footer className="footer">
      <Typography className="footer-heading" variant="h5" color="success">Additional Resources</Typography>
      <a
        className="icon"
        href="https://github.com/Dillweed5446"
        alt="GitHub"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHubIcon title="GitHub"/>
      </a>
      <a
        className="icon"
        href="https://www.linkedin.com/in/paul-dill-99b498aa/"
        alt="LinkedIn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedInIcon title="LinkedIn"/>
      </a>
      <a
        className="icon"
        href="https://stackoverflow.com/users/12745384/pdill5446?tab=profile"
        alt="StackOverflow"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaStackOverflow title="StackOverflow"/>
      </a>
      <a
        className="icon"
        href="https://waakaukau.blog/"
        alt="WordPress.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWordpress title="WordPress.com"/>
      </a>
    </footer>
  )
}

  <style jsx>{`
  .footer {
    background-color: #DAD2D8;
  },

  .footer-heading {
    padding: 3%;

  },
  .icon {
    margin: 3%;
  }

    `}</style>
