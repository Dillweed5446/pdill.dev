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
        label: 'Wind Speed (mph)',
        data: state.data[0].data.hours.slice(state.firstData, state.lastData).map(item => {
          return item.windSpeed.noaa
        }), // wind speed data here
        backgroundColor: 'rgba(0, 255, 255, .5)',
        borderColor: 'rgba(0, 0, 0, 1)',
        borderWidth: 2,
        fill: true
      }, {
        label: 'Wind Gust (mph)',
        data: state.data[0].data.hours.slice(state.firstData, state.lastData).map(item => {
          return item.gust.sg
        }), // gust data here

        // Changes this dataset to become a line
        type: 'line',
        borderColor: 'rgba(255, 0, 0, 1)',
        pointBackgroundColor: 'rgba(255, 255, 0, 1)',
        fill: false
      }],
      labels: state.data[0].data.hours.slice(state.firstData, state.lastData).map(item => {
        return new Date(item.time).toLocaleTimeString('en-US', { timeZone: 'HST', hour: '2-digit', hour12: false })
      }) // Date (x-axis)
    },
    options: {
      title: {
        display: true,
        text: new Date(state.data[0].data.hours[state.firstData].time).toLocaleDateString('en-US', { timeZone: 'HST' }),
        position: 'top',
        fontSize: 20
      },
      responsive: true,
      maintainAspectRatio: true,
      aspectRatio: 1.5,
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
    <div className="canvas" style={{ paddingTop: '1rem' }}>
      <canvas ref={chartContainer} />
    </div>
  )
}
