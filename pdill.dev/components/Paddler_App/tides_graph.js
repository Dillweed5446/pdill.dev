import Chartjs from 'chart.js'
import React, { useEffect, useRef, useContext, useState } from 'react'
import { Context } from '../state/Store'

export default function TidesGraph () {
  const [state, dispatch] = useContext(Context)

  const chartConfig = {
    type: 'line',
    data: {
      datasets: [{
        label: 'Tides (ft)',
        data: state.data[2].data.data.slice(state.firstTideData, state.lastTideData).map(item => {
          return item.height
        }),
        backgroundColor: 'rgba(138, 0, 121, 1)',
        borderColor: 'rgba(138, 0, 121, 1)',
        borderWidth: 2,
        fill: false
      }],
      labels: state.data[2].data.data.slice(state.firstTideData, state.lastTideData).map(item => {
        return new Date(item.time).toLocaleString('en-US', { timeZone: 'HST' })
      })
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
      const newChartInstance = new Chartjs(chartContainer.current, chartConfig)
      setChartInstance(newChartInstance)
    }
  }, [chartContainer, state.page])

  return (
    <div>
      <canvas ref={chartContainer} />
    </div>
  )
}