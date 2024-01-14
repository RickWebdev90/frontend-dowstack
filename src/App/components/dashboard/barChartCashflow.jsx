import React from 'react'
import { Chart as ChartJS } from "chart.js/auto"; 
import { Bar } from "react-chartjs-2"; 

export default function BarChartCashflow() {
  return (
    <div>
        <div className="barchart-cashflow">
        <Bar
            data={{
                labels: ["Jan.", "Feb.", "März", "Apr.", "Mai", "Jun.", "Jul.", "Aug.", "Sept.", "Okt.", "Nov.", "Dez."],
                datasets: [
                {
                    label: "Einnahmen",
                    data: [3000, 2500, 2000, 2400, 3000, 3200, 3000, 2500, 2000, 2400, 3000, 3200],
                    backgroundColor: "#6EB636",
                    borderRadius: 40,
                    borderWidth: 5,
                },
                {
                    label: "Ausgaben",
                    data: [2800, 2600, 2200, 2500, 2000, 2100, 2800, 2600, 2200, 2500, 2000, 2100],
                    backgroundColor: "#FF3F49",
                    borderRadius: 40,
                    borderWidth: 5,
                }
            ],
        
        }}
        
        options= {{
                    plugins: {
                        legend: {
                            position: "bottom",
                                },
                            },
                    scales: {
                        y: {
                            grid: {
                                drawOnChartArea: false
                                    }
                            },
                        x: {
                                grid: {
                                    drawOnChartArea: false
                                        }   
                            } }
               }}
        width={900}
        height={400}
        />
        </div>
    </div>
  )
}
