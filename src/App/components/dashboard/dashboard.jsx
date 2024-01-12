import React from 'react';
import DashBalance from './DashBalance';
import "../../../app.css"
import DashGoal from './dashGoal';
import DashPortfolio from './dashPortfolio';


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
    </div>
  );
}
