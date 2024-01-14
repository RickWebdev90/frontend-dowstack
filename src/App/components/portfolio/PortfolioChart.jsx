import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PortfolioChart() {
  return (
    <div>
      <Doughnut
      data={{
        labels: ['ETFs', 'Bank', 'Gold'],
        datasets: [
            {
              data: [12, 19, 3],
              backgroundColor: ['#FF3F49','#267BC6','#FCD112'],
              borderColor: ['#FF3F49','#267BC6','#FCD112',],
    },
  ],
}}
    options= {{
        plugins: {
            legend: {
              position: "bottom",
              },
          },
}}
/>
  </div>
)
}
