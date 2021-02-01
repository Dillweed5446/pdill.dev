import { TableCell, TableContainer, TableHead, TableRow, TextField, Typography, TableBody, Button } from '@material-ui/core'
import React, { useContext, Fragment, useEffect, useState } from 'react'
import BoxModel from '../content-box'
import Axios from 'axios'
import { Context } from '../state/Store'
import WindGraph from './wind_graph'

export default function PaddleConditions () {
  const [state, dispatch] = useContext(Context)
  const [isLoading, setLoading] = useState(false)
  const [readyToRender, setReadyToRender] = useState(false)
  const [lat, lng] = state.location
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

  const clickHandler = (e) => {
    e.preventDefault()
    setLoading(true)
  }

  useEffect(() => {
    if (isLoading === true) {
      console.log('calling api')
      Axios.all([
        Axios.get(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}`, {
          headers: {
            Authorization: process.env.NEXT_PUBLIC_API_KEY

          }
        }
        ),
        Axios.get(`https://api.stormglass.io/v2/astronomy/point?lat=${lat}&lng=${lng}&end=${end}`, {
          headers: {
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
        .then(response => {
          dispatch({ type: 'SET_DATA', payload: response })
          setReadyToRender(true)
        })
        .catch(error => dispatch({ type: 'SET_ERROR', payload: error }))
    } else {
      dispatch({ type: 'RESET' })
    }
    return () => {
      setLoading(false)
    }
  }, [isLoading])

  if (readyToRender === false) {
    return (
      <Fragment>
        <BoxModel>
          <Typography variant="h2" className="name" color="primary" id="top">
            Ocean Paddler Weather Report
          </Typography>
          <form>
            <TextField variant="standard" label="Location" defaultValue="Honaunau-Napoopoo" />
          </form>
          <Button variant="contained" size="small" onClick={clickHandler}>Submit</Button>
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
          <Button variant="contained" size="small" onClick={clickHandler}>Submit</Button>
          <div>
            {console.log(isLoading)}
            {console.log(state.data)}
            {/* The function below extracts the key value pairs for one hour of one day and logs them.  Progress! */}
            {/* {state.data[0].data.hours.slice(0, 1).map(item => {
            Object.entries(item).forEach(entry => console.log(`Key: ${entry[0]} Value: ${entry[1].sg}`))
          })} */}
            {state.data[0].data.hours.map(item => {
              console.log(`Date: ${item.time}`)
              console.log(`Gust: ${item.gust.sg}`)
              console.log(`Wind Direction: ${item.windDirection.sg}`)
              console.log(`Wind Speed: ${item.windSpeed.sg}`)
              // This function maps the value of gusts (sg value)
            })}
          </div>
          <WindGraph />
        </BoxModel>
      </Fragment>
    )
  }
}
