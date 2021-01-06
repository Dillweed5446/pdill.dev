import React, { useState, Fragment, useEffect } from 'react'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

export default function SimpleMenu () {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const menuOptions = [
    { name: 'Home', href: 'https://pdill.dev/#top' },
    { name: 'About me', href: 'https://pdill.dev/#About' },
    { name: 'Projects', href: 'https://pdill.dev/#projects' },
    { name: 'Contact', href: 'mailto:paul@pdill.dev' },
    { name: 'Resume' }
  ]
  const [list, setList] = useState([])
  const [isActive, setIsActive] = useState(false)
  const newList = []

  const listMenuOptions = () => {
    Object.values(menuOptions).forEach((item, index) => {
      newList.push(<MenuItem key={index} onClick={handleClose}><a href={item.href}>{item.name}</a></MenuItem>)
    })
    return newList
  }

  function handleClick (event) {
    setAnchorEl(event.currentTarget)
    listMenuOptions()
    console.log(newList)
    setIsActive(!isActive)
    isActive ? setList(newList) : setList(null)
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
        {list}
      </Menu>
    </div>
  )
}
