// Extract data from store, isolate appropriate data for graph.  Chart data.
// This file may just hold graph logic.  Data will be passed down from parent (paddler_app)
import React, { useEffect, useRef, useContext, useState } from 'react'
import { Context } from '../state/Store'
import Chartjs from 'chart.js'

export default function WaveGraph () {
  const [state, dispatch] = useContext(Context)

  const mixedChartConfig = {
    type: 'line',
    data: {
      datasets: [{
        label: 'Swell Height (ft)',
        data: state.data[0].data.hours.slice(state.firstData, state.lastData).map(item => {
          return item.swellHeight.sg
        }),
        backgroundColor: 'rgba(0, 255, 255, .5)',
        borderColor: 'rgba(0, 255, 0, 1)',
        borderWidth: 2,
        fill: false
      }, {
        label: 'Secondary Swell Height (ft)',
        data: state.data[0].data.hours.slice(state.firstData, state.lastData).map(item => {
          return item.secondarySwellHeight.sg
        }),
        borderColor: 'rgba(255, 0, 0, 1)',
        pointBackgroundColor: 'rgba(255, 0, 0, 1)',
        fill: false
      }, {
        label: 'Wind Wave Height (ft)',
        data: state.data[0].data.hours.slice(state.firstData, state.lastData).map(item => {
          return item.windWaveHeight.sg
        }),
        backgroundColor: 'rgba(255, 255, 0, 1)',
        borderColor: 'rgba(255, 255, 0, 1)',
        borderWidth: 2,
        fill: false
      }],
      labels: state.data[0].data.hours.slice(state.firstData, state.lastData).map(item => {
        return new Date(item.time).toLocaleTimeString('en-US', { timeZone: 'HST' })
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
    <div style={{ paddingTop: '1rem' }}>
      <canvas responsive='true' ref={chartContainer} />
    </div>
  )
}
