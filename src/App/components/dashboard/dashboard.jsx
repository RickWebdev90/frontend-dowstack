import React from 'react';
import { useUserContext } from '../../hooks/userContext';

export default function Dashboard() {
  const auth = sessionStorage.getItem("userid")
  console.log("userid:",auth)
  return (
    <div>
      <h1>Dashboard</h1>
      {auth && <p>User ID: {auth}</p>}
    </div>
  );
}
