// Extract data from store, isolate appropriate data for graph.  Chart data.
// This file may just hold graph logic.  Data will be passed down from parent (paddler_app)
import React, { useEffect, useRef, useContext, useState } from 'react'
import { Context } from '../state/Store'
import Chartjs from 'chart.js'

export default function WindGraph () {
  const [state, dispatch] = useContext(Context)
  const firstHour = 10
  const lastHour = 34

  const mixedChartConfig = {
    type: 'bar',
    data: {
      datasets: [{
        label: 'Wind Speed (m/s)',
        data: state.data[0].data.hours.slice(firstHour, lastHour).map(item => {
          return item.windSpeed.noaa
        }) // wind speed data here
      }, {
        label: 'Wind Gust (m/s)',
        data: state.data[0].data.hours.slice(firstHour, lastHour).map(item => {
          return item.gust.sg
        }), // gust data here

        // Changes this dataset to become a line
        type: 'line'
      }],
      labels: state.data[0].data.hours.slice(firstHour, lastHour).map(item => {
        const date = new Date(item.time).toLocaleString('en-US', { timeZone: 'UTC' })
        return date
      }) // Date (x-axis)
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    }
  }

  const chartContainer = useRef(null)
  const [chartInstance, setChartInstance] = useState(null)

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      const newChartInstance = new Chartjs(chartContainer.current, mixedChartConfig)
      setChartInstance(newChartInstance)
    }
  }, [chartContainer])

  //   Tinker with code below to increment date
  //   const updateDataset = (i, newData) => {
  //     chartInstance.data.datasets.datastate.data[0].data.hours.slice(firstHour +=i, lastHour +=i) = newData
  //     chartInstance.update()
  //   }

  //   const onButtonClick = (e) => {
  //     e.preventDefault()
  //     updateDataset(24, data)
  //   }

  return (
    <div>
      {/* <button onClick={onButtonClick}>Next Day</button> */}
      <canvas ref={chartContainer} />
    </div>
  )
}
