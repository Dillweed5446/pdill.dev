import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React, { useContext } from 'react'
import { Context } from '../state/Store'

export default function TideTable () {
  const [state, dispatch] = useContext(Context)

  const useStyles = makeStyles({
    table: {
      maxWidth: 300
    }
  })

  const classes = useStyles()

  return (
    <div style={{ paddingTop: '1rem', display: 'inline-block' }}>
      <Typography variant="h4" className={classes.table}>Tides (Based on Median Sea Level)</Typography>
      <TableContainer>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Type</TableCell>
              <TableCell align="left">Time</TableCell>
              <TableCell align="left">Height</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{state.data[2].data.data.slice(state.firstTideData, state.lastTideData).map(item => {
            return (<TableRow key={item.time}>
              <TableCell>{item.type}</TableCell>
              <TableCell>{new Date(item.time).toLocaleTimeString('en-US', { timeZone: 'HST' })}</TableCell>
              <TableCell>{`${(item.height / 0.3048).toFixed(3)} ft`}</TableCell>
            </TableRow>
            )
          })}</TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
