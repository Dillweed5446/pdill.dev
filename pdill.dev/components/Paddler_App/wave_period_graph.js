// Extract data from store, isolate appropriate data for graph.  Chart data.
// This file may just hold graph logic.  Data will be passed down from parent (paddler_app)
import React, { useEffect, useRef, useContext, useState } from 'react'
import { Context } from '../state/Store'
import Chartjs from 'chart.js'

export default function WavePeriodGraph () {
  const [state, dispatch] = useContext(Context)

  const mixedChartConfig = {
    type: 'bar',
    data: {
      datasets: [{
        label: 'Swell Period (s)',
        data: state.data[0].data.hours.slice(state.firstData, state.lastData).map(item => {
          return item.swellPeriod.sg
        }),
        backgroundColor: 'rgba(0, 255, 255, .5)',
        borderColor: 'rgba(0, 255, 0, 1)',
        borderWidth: 2
      }, {
        label: 'Secondary Swell Period (s)',
        data: state.data[0].data.hours.slice(state.firstData, state.lastData).map(item => {
          return item.secondarySwellPeriod.sg
        }),
        borderColor: 'rgba(255, 0, 0, 1)',
        backgroundColor: 'rgba(255, 0, 0, .5)',
        borderWidth: 2
      }, {
        label: 'Wind Wave Period (s)',
        data: state.data[0].data.hours.slice(state.firstData, state.lastData).map(item => {
          return item.windWavePeriod.sg
        }),
        backgroundColor: 'rgba(255, 255, 0, .5)',
        borderColor: 'rgba(255, 255, 0, 1)',
        borderWidth: 2
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
    <div style={{ paddingTop: '1rem', position: 'relative', height: '40vh', width: '80vw' }}>
      <canvas responsive='true' ref={chartContainer} />
    </div>
  )
}
