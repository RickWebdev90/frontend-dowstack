import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { UserContext } from '../../layouts/MainLayout'

export default function ProtectedRoutes() {

    const {user} = useContext(UserContext)

    if(user != "authenticated"){
        return <Navigate to="/login"/>
    }
  return <Outlet/>
}
