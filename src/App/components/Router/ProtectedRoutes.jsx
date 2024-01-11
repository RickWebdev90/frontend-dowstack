import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export default function ProtectedRoutes() {
  const auth = sessionStorage.getItem("userid")

  if (auth === null) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}
