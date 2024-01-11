import React from 'react';
import { useUserContext } from '../../hooks/userContext';

export default function Dashboard() {
  const { user } = useUserContext();
  console.log("userid:",user)
  return (
    <div>
      <h1>Dashboard</h1>
      {user && <p>User ID: {user._id}</p>}
    </div>
  );
}
