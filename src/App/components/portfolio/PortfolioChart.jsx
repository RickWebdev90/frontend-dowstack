import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['ETFs', 'Bank', 'Gold'],
  datasets: [
    {
      data: [12, 19, 3],
      backgroundColor: [
        '#FF3F49',
        '#267BC6',
        '#FCD112',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        '#FF3F49',
        '#267BC6',
        '#FCD112',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 5,
    },
  ],
};

export function PortfolioChart() {
  return <Doughnut data={data} />;
}
