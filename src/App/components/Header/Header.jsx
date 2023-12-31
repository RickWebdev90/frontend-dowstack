import React from 'react'
import UserNavigation from './components/Navigation'
import { NavLink, Link } from 'react-router-dom'
import headerLogo from "../../assets/logo/DowStack_Logo_Color.svg"
import { UserContext } from '../../layouts/MainLayout'
import { useContext } from 'react'

export default function Header() {

  const {user}=useContext(UserContext)
  
  return <header>
         <nav className="header-navbar">
            <img src={headerLogo} alt="logo" className="headerLogo"/>
            <ul className="nav-header-links">
            <NavLink to="/" style={({isActive})=>({color: isActive ? "#6EB636" : "black"})}>
                <li className="nav-header-item">Hompage</li>
                </NavLink>
            {user === "authenticated" ?<UserNavigation />: null}
            </ul>
            <button><Link to="/login">Login</Link></button>
            </nav>
  </header>
}
