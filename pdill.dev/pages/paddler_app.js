import { TableCell, TableContainer, TableHead, TableRow, TextField, Typography, TableBody, Button } from '@material-ui/core'
import React, { useState, Fragment } from 'react'
import BoxModel from '../components/content-box'
import Axios from 'axios'

export default function PaddleConditions () {
  const [isLoading, setLoading] = useState(true)
  const [apiData, setData] = useState([])
  const lat = 21.3
  const lng = -157.8
  const today = new Date()
  const tenDaysOut = new Date(new Date().setDate(new Date().getDate() + parseInt(10)))
  const end = `${tenDaysOut.getFullYear()}-${(tenDaysOut.getMonth() + 1).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })}-${(tenDaysOut.getDate()).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })}`
  const params = [
    // wave info
    'secondarySwellDirection', 'secondarySwellHeight', 'secondarySwellPeriod',
    'swellDirection', 'swellHeight', 'swellPeriod',
    'waveDirection', 'waveHeight', 'wavePeriod',
    'windWaveDirection', 'windWaveHeight', 'windWavePeriod',
    // wind and current
    'windDirection', 'windSpeed', 'gust', 'currentDirection', 'currentSpeed',
    // weather
    'cloudCover', 'waterTemperature', 'airTemperature'
  ].join(',')

  const apiCall = () => {
    Axios.all([
      Axios.get(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}`, {
        headers: {
          // Need to figure out why I'm getting 403 (forbidden) code when I run api with API_KEY as auth.  Using full api key here is unsafe
          Authorization: process.env.NEXT_PUBLIC_API_KEY

        }
      }
      ),
      Axios.get(`https://api.stormglass.io/v2/astronomy/point?lat=${lat}&lng=${lng}&end=${end}`, {
        headers: {
          // Need to figure out why I'm getting 403 (forbidden) code when I run api with API_KEY as auth.  Using full api key here is unsafe
          Authorization: process.env.NEXT_PUBLIC_API_KEY

        }
      }
      ),
      Axios.get(`https://api.stormglass.io/v2/tide/extremes/point?lat=${lat}&lng=${lng}&start=${today.toISOString()}&end=${tenDaysOut.toISOString()}`, {
        headers: {
          Authorization: process.env.NEXT_PUBLIC_API_KEY

        }
      })
    ])
      .then(async (response) => await setData(response))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false))
  }

  if (isLoading === true) {
    return (
      <Fragment>
        <BoxModel>
          <Typography variant="h2" className="name" color="primary" id="top">
              Ocean Paddler Weather Report
          </Typography>
          <form>
            <TextField variant="standard" label="Location" defaultValue="Honaunau-Napoopoo" />
          </form>
          <Button variant="contained" size="small" onClick={apiCall}>Submit</Button>
          <TableContainer>
            <TableHead>
              <TableRow>
                <TableCell align="right">Time</TableCell>
                <TableCell align="right">Temperature&nbsp;(&deg;F)</TableCell>
                <TableCell align="right">Wind&nbsp;Direction</TableCell>
                <TableCell align="right">Wind&nbsp;Speed&nbsp;(mph)</TableCell>
                <TableCell align="right">Wind&nbsp;Gusts&nbsp;(mph)</TableCell>
              </TableRow>
            </TableHead>
          </TableContainer>
        </BoxModel>
      </Fragment>
    )
  } else {
    return (
      <Fragment>
        <BoxModel>
          <Typography variant="h2" className="name" color="primary" id="top">
            Ocean Paddler Weather Report
          </Typography>
          <form>
            <TextField variant="standard" label="Location" defaultValue="Honaunau-Napoopoo" />
          </form>
          <Button variant="contained" size="small" onClick={apiCall}>Submit</Button>
          <TableContainer>
            <TableHead>
              <TableRow>
                <TableCell align="right">Time</TableCell>
                <TableCell align="right">Temperature&nbsp;(&deg;F)</TableCell>
                <TableCell align="right">Wind&nbsp;Direction</TableCell>
                <TableCell align="right">Wind&nbsp;Speed&nbsp;(mph)</TableCell>
                <TableCell align="right">Wind&nbsp;Gusts&nbsp;(mph)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {console.log(end)}
              {console.log(apiData)}
              {/* The function below extracts the key value pairs for one hour of one day and logs them.  Progress! */}
              {apiData[0].data.hours.slice(0, 1).map(item => {
                Object.entries(item).forEach(entry => console.log(`Key: ${entry[0]} Value: ${entry[1].sg}`))
              })}

            </TableBody>
          </TableContainer>
        </BoxModel>
      </Fragment>
    )
  }
};
