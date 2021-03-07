import React, { useContext, useState } from 'react'
import { FormControl, Select, InputLabel } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import MenuItem from '@material-ui/core/MenuItem'
import { Context } from './state/Store'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(1) // May need to be tweaked.  Can't tell in dev server.
  }
}))

export default function LocationMenu () {
  const [locationName, setLocationName] = useState('')
  const [state, dispatch] = useContext(Context)
  const classes = useStyles()

  const locationOptions = [
    { key: 0, name: 'Honaunau Bay', location: [21.3, -157.8] },
    { key: 1, name: 'Kealakekua Bay', location: [19.5, -155.9] },
    { key: 2, name: 'Hilo Bay', location: [19.73, -155.07] }
  ]

  function handleSelection (e) {
    dispatch({ type: 'SET_LOCATION', location: locationOptions[e.target.value].location })
    setLocationName(locationOptions[e.target.value].key)
  }

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel>Location</InputLabel>
        <Select
          value={locationName}
          onChange={handleSelection}
        >
          {Object.values(locationOptions).map((item, index) => (
            <MenuItem key={item.key} value={item.key}>{item.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>

  )
}
