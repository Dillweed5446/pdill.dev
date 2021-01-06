import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

export default function SimpleMenu () {
  const [anchorEl, setAnchorEl] = useState(null)

  const menuOptions = [
    { name: 'Home', href: 'https://pdill.dev/#top' },
    { name: 'About me', href: 'https://pdill.dev/#About' },
    { name: 'Projects', href: 'https://pdill.dev/#projects' },
    { name: 'Contact', href: 'mailto:paul@pdill.dev' },
    { name: 'Resume' }
  ]

  function handleClick (event) {
    setAnchorEl(event.currentTarget)
  }

  function handleClose () {
    setAnchorEl(null)
  }

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
      ☰
      </Button>
      <Menu
        id="simple-menu"
        anchorReference="anchorEl"
        anchorEl={anchorEl}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {Object.values(menuOptions).map((item, index) => (
          <MenuItem key={index} onClick={handleClose}>
            <a href={item.href}>{item.name}</a>
          </MenuItem>
        ))}
      </Menu>
    </div>
  )
}
