import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import MainLayout from '../../layouts/MainLayout'
import Homepage from '../../../Landingpage/Homepage'
import Dashboard from '../Dashboard/dashboard'
import Cashflow from '../Cashflow/cashflow'
import Portfolio from '../portfolio/Portfolio'
import Savinggoals from '../savinggoals/Savinggoals'
import Loginpage from '../user/loginpage'
import Registration from '../../../Landingpage/Registration/Registration'
import Usersettings from '../User/usersettings'
import NotFoundPage from '../NotFoundPage'

export const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<MainLayout/>}>
        <Route index element={<Homepage/>}/>
        <Route path="dashboard" element={<Dashboard/>}/>
        <Route path="cashflow" element={<Cashflow/>}/>
        <Route path="portfolio" element={<Portfolio/>}/>
        <Route path="savinggoals" element={<Savinggoals/>}/>
        <Route path="login" element={<Loginpage/>}/>
        <Route path="registration" element={<Registration/>}/>
        <Route path="usersettings" element={<Usersettings/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Route>
  )
)
