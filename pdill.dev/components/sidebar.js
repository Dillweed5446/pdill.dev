import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { FaStackOverflow, FaWordpress } from 'react-icons/fa'

export default function Sidebar () {
  return (
    <footer className="sidebar">
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

      <style jsx>{`
      .sidebar {
        position: sticky;
        float: right;
        top: 0;
        right: 0;
        display: inline-grid;


      },

      // .footer-heading {
      //   padding: 3%;
      //   padding-bottom: 2%;
      // },
      .icon {
        padding: 2%;
        font-size: 3rem;
        vertical-align: middle;
      }

        `}</style>
    </footer>

  )
}