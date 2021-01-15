import { TableCell, TableContainer, TableHead, TableRow, TextField, Typography, TableBody, Button } from '@material-ui/core'
import React, { useState, Fragment } from 'react'
import BoxModel from '../components/content-box'
import Axios from 'axios'
import { DateTime } from 'luxon'

export default function PaddleConditions () {
  const [isLoading, setLoading] = useState(true)
  const [apiData, setData] = useState([])

  const apiCall = async () => {
    await Axios.get('https://api.weather.gov/gridpoints/HFO/229,73')
      //   .then((response) => response.json())
      .then((response) => setData(response.data.properties))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false))
  }

  //   const apiData = Object.values(data)
//   const mapDataToTable = () => {
//     for (let i = 0; i <= 30; i++) {
//       <TableRow key={i}>
//         <TableCell>{new Date(Date.parse(apiData.temperature.values[i].validTime.split('/')[0])).toLocaleString()}</TableCell>
//         <TableCell>{apiData.temperature.values[i].value * (9 / 5) + 32}</TableCell>
//         <TableCell>{apiData.windDirection.values[i].value}</TableCell>
//         <TableCell>{apiData.windSpeed.values[i].value}</TableCell>
//         <TableCell>{apiData.windGust.values[i].value}</TableCell>
//       </TableRow>
//     }
//   }

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
              {console.log(apiData)}
              <TableRow key={0}>
                <TableCell>{new Date(Date.parse(apiData.temperature.values[0].validTime.split('/')[0])).toLocaleString()}</TableCell>
                <TableCell>{apiData.temperature.values[0].value * (9 / 5) + 32}</TableCell>
                <TableCell>{apiData.windDirection.values[0].value}</TableCell>
                <TableCell>{apiData.windSpeed.values[0].value}</TableCell>
                <TableCell>{apiData.windGust.values[0].value}</TableCell>
              </TableRow>
              <TableRow key={1}>
                <TableCell>{new Date(Date.parse(apiData.temperature.values[1].validTime.split('/')[0])).toLocaleString()}</TableCell>
                <TableCell>{apiData.temperature.values[1].value * (9 / 5) + 32}</TableCell>
                <TableCell>{apiData.windDirection.values[1].value}</TableCell>
                <TableCell>{apiData.windSpeed.values[1].value}</TableCell>
                <TableCell>{apiData.windGust.values[1].value}</TableCell>
              </TableRow>
              <TableRow key={2}>
                <TableCell>{new Date(Date.parse(apiData.temperature.values[2].validTime.split('/')[0])).toLocaleString()}</TableCell>
                <TableCell>{apiData.temperature.values[2].value * (9 / 5) + 32}</TableCell>
                <TableCell>{apiData.windDirection.values[2].value}</TableCell>
                <TableCell>{apiData.windSpeed.values[2].value}</TableCell>
                <TableCell>{apiData.windGust.values[2].value}</TableCell>
              </TableRow>
              <TableRow key={3}>
                <TableCell>{new Date(Date.parse(apiData.temperature.values[3].validTime.split('/')[0])).toLocaleString()}</TableCell>
                <TableCell>{apiData.temperature.values[3].value * (9 / 5) + 32}</TableCell>
                <TableCell>{apiData.windDirection.values[3].value}</TableCell>
                <TableCell>{apiData.windSpeed.values[3].value}</TableCell>
                <TableCell>{apiData.windGust.values[3].value}</TableCell>
              </TableRow>
              <TableRow key={4}>
                <TableCell>{new Date(Date.parse(apiData.temperature.values[4].validTime.split('/')[0])).toLocaleString()}</TableCell>
                <TableCell>{apiData.temperature.values[4].value * (9 / 5) + 32}</TableCell>
                <TableCell>{apiData.windDirection.values[4].value}</TableCell>
                <TableCell>{apiData.windSpeed.values[4].value}</TableCell>
                <TableCell>{apiData.windGust.values[4].value}</TableCell>
              </TableRow>
            </TableBody>
          </TableContainer>
        </BoxModel>
      </Fragment>
    )
  }
};

// apiData.temperature.values[0].validTime,
// apiData.temperature.values[0].value * (9 / 5) + 32,apiData.temperature.values[0].validTime,
// apiData.temperature.values[0].value * (9 / 5) + 32,
// apiData.windDirection.values[0].value,
// apiData.windSpeed.values[0].value,
// apiData.windGust.values[0].value

// new Date(Date.parse(item.validTime.split('/')[0])).toLocaleString()

// apiData.windDirection.values[0].value,
// apiData.windSpeed.values[0].value,
// apiData.windGust.values[0].value
// .replace(/[/PTH]/gi, '')
// .temperature.values.slice(0, 30)
