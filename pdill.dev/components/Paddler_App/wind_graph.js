// Extract data from store, isolate appropriate data for graph.  Chart data.
// This file may just hold graph logic.  Data will be passed down from parent (paddler_app)
import React, { useEffect, useRef, useContext, useState } from 'react'
import { Context } from '../state/Store'
import Chartjs from 'chart.js'

export default function WindGraph () {
  const [state, dispatch] = useContext(Context)

  const mixedChartConfig = {
    type: 'bar',
    data: {
      datasets: [{
        label: 'Wind Speed (m/s)',
        data: state.data[0].data.hours.slice(state.firstData, state.lastData).map(item => {
          return item.windSpeed.noaa
        }) // wind speed data here
      }, {
        label: 'Wind Gust (m/s)',
        data: state.data[0].data.hours.slice(state.firstData, state.lastData).map(item => {
          return item.gust.sg
        }), // gust data here

        // Changes this dataset to become a line
        type: 'line'
      }],
      labels: state.data[0].data.hours.slice(state.firstData, state.lastData).map(item => {
        const date = new Date(item.time).toLocaleString('en-US', { timeZone: 'HST' })
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

  // Below function updates chart instance on changes to chartContainer and on state.page change
  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      const newChartInstance = new Chartjs(chartContainer.current, mixedChartConfig)
      setChartInstance(newChartInstance)
    }
  }, [chartContainer, state.page])

  return (
    <div>
      <canvas ref={chartContainer} />
    </div>
  )
}
