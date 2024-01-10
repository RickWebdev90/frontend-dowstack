import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useUserContext } from '../../hooks/userContext.jsx';

export default function ProtectedRoutes() {
  const { user } = useUserContext();

  if (user !== "authenticated") {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}
