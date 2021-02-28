import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React, { useContext } from 'react'
import { Context } from '../state/Store'

export default function AstronomyTable () {
  const [state, dispatch] = useContext(Context)

  const useStyles = makeStyles({
    table: {
      maxWidth: 350
    }
  })

  const classes = useStyles()

  return (
    <div style={{ paddingTop: '1rem', display: 'inline-block', maxWidth: '350' }}>
      <Typography variant="h4" className={classes.table}>Astronomical Data</Typography>
      <TableContainer>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Parameter</TableCell>
              <TableCell align="left">Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{state.data[1].data.data.slice(state.sunData, (state.sunData + 1)).map(item => {
            return (
              <div key={item.time}>
                <TableRow><TableCell align="left">Sunrise</TableCell><TableCell align="left">{new Date(item.sunrise).toLocaleTimeString('en-US', { timeZone: 'HST' })}</TableCell></TableRow>
                <TableRow><TableCell align="left">Sunset</TableCell><TableCell align="left">{new Date(item.sunset).toLocaleTimeString('en-US', { timeZone: 'HST' })}</TableCell></TableRow>
                <TableRow><TableCell align="left">Moonrise</TableCell><TableCell align="left">{new Date(item.moonrise).toLocaleTimeString('en-US', { timeZone: 'HST' })}</TableCell></TableRow>
                <TableRow><TableCell align="left">Moonset</TableCell><TableCell align="left">{new Date(item.moonset).toLocaleTimeString('en-US', { timeZone: 'HST' })}</TableCell></TableRow>
                <TableRow><TableCell align="left">Moon Phase</TableCell><TableCell align="left">{item.moonPhase.current.text}</TableCell></TableRow>
                <TableRow><TableCell align="left">Moonlight Percentage</TableCell><TableCell align="left">{`${item.moonFraction.toFixed(2) * 100} %`}</TableCell></TableRow>
              </div>
            )
          }
          )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
