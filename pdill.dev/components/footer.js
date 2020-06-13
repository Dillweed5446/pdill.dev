import React from 'react'
import Typography from '@material-ui/core/Typography'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { FaStackOverflow, FaWordpress } from 'react-icons/fa'

export default function Footer () {
  return (
    <footer>
      <Typography variant="h5" color="success">Additional Resources</Typography>
      <a
        href="https://github.com/Dillweed5446"
        alt="GitHub"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHubIcon title="GitHub"/>
      </a>
      <a
        href="https://www.linkedin.com/in/paul-dill-99b498aa/"
        alt="LinkedIn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedInIcon title="LinkedIn"/>
      </a>
      <a
        href="https://stackoverflow.com/users/12745384/pdill5446?tab=profile"
        alt="StackOverflow"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaStackOverflow title="StackOverflow"/>
      </a>
      <a
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
