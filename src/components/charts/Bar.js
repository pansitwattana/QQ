import React from 'react'
import { Bar } from 'react-chartjs-2'

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Test',
      backgroundColor: 'rgba(255,99,132,0.2)',
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      data: [65, 59, 80, 81, 56, 55, 40],
      borderWidth: 0
    }
  ]
}

const BarComponent = () => (
  <Bar
    data={data}
    width={300}
    height={100}
    legend={{
          display: true,
          labels: {
              fontColor: 'rgb(255, 99, 132)',
              fontSize: 12,
              boxWidth: 15,
              fillStyle: 'rgb(0, 0, 0)',
          },
          position: 'right',
          usePointStyle: true
      }}
    options={{
            responsive: true,
            scales: {
              xAxes: [
                {
                  barPercentage: 0.4,
                  gridLines: {
                    display: false
                  }
                }
              ],
              yAxes: [
                {
                  gridLines: {
                    display: false
                  },
                }
              ]
            },
            // animation: {
            //   onComplete() {
                // const { ctx } = this.chart;
                // // ctx.font = this.scale.font;
                // // ctx.fillStyle = this.scale.textColor
                // ctx.textAlign = 'center';
                // ctx.textBaseline = 'bottom';

                // this.datasets.forEach((dataset) => {
                //     dataset.bars.forEach((bar) => {
                //         ctx.fillText(bar.value, bar.x, bar.y - 5);
                //     });
                // })
              // }
            // }
          }}
  />
)
export default BarComponent
