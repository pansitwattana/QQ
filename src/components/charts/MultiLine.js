import React from 'react'
import { Line } from 'react-chartjs-2'

const lineChartData = {
  labels: ['1', '2', '3', '4', '5', '6', '7'],
  datasets: [{
    label: 'My First dataset',
    data: [
      40,
      20,
      10,
      90,
      100,
      5,
      10
    ],
  }, {
    label: 'My Second dataset',
    data: [
      50,
      10,
      90,
      30,
      10,
      55,
      90
    ],
  }]
}

const MultiLine = () => (
  <Line data={lineChartData} />
)

export default MultiLine

