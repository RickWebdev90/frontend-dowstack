import React from 'react';
import DashBalance from './dashBalance';


export default function Dashboard() {
  const auth = sessionStorage.getItem("userid")
  console.log("userid:",auth)
  return (
    <div>
      <h1>Dashboard</h1>
      <DashBalance />
      {auth && <p>User ID: {auth}</p>}
    </div>
  );
}
