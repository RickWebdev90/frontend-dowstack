import React from 'react';
import DashBalance from './DashBalance';
import "../../../app.css"
import DashGoal from './dashGoal';
import DashPortfolio from './dashPortfolio';
import BarChartCashflow from './barChartCashflow';
import DognutChartDashboard from './dognutChartDashboard';


export default function Dashboard() {
  const auth = sessionStorage.getItem("userid")
  console.log("userid:",auth)
  return (
    <div>
      <h1>Dein Dashboard</h1>
      <div className="dashboard-boxes">
      <DashBalance />
      <DashGoal />
      <DashPortfolio />
      </div>
      <div className="dashboard-charts">
      <div className="dashboard-barchart-container">
      <div className="dashboard-barchart-title">
        <h2>Cashflow Übersicht</h2>
      </div>
      <div className="dashboard-barchart">
      <BarChartCashflow />
      </div>
      </div>
      <div className="dashboard-dognutchart-container">
      <div className='dashboard-dognutchart-title'>
        <h2>Ausgaben</h2>
      </div>
      <div className='dashboard-dognut'>
      <DognutChartDashboard />
      </div>
      </div>
      <div></div>
      </div>
    </div>
  );
}
