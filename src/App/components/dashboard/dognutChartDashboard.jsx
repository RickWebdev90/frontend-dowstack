import React from 'react'
import { Chart as ChartJS } from "chart.js/auto"; 
import { Doughnut } from "react-chartjs-2"; 

export default function DognutChartDashboard() {
  return (
    <div>
    <Doughnut 
        data={{
            labels: ["Fixkosten", "variable Kosten", "Sparbetrag", "Investment"],
            datasets: [
                {
                    data: [875, 650, 300, 375],
                    backgroundColor: ["#FCD112", "#267BC6", "#6EB636", "#FF3F49" ],
                    borderColor: ["#FCD112", "#267BC6", "#6EB636", "#FF3F49" ],
                },

            ]
        }}
        options= {{
            plugins: {
                legend: {
                    position: "bottom",
                        },
                    },
       }}
    width={400}
    height={400}
    />
      
    </div>
  )
}
