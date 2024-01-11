import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useUserContext } from '../../hooks/userContext.jsx';

export default function ProtectedRoutes() {
  const { user } = useUserContext();

  if (user === null) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}
