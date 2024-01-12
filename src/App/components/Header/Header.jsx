import React from 'react';
import UserNavigation from './components/Navigation';
import { NavLink, Link } from 'react-router-dom';
import headerLogo from "../../assets/logo/DowStack_Logo_Color.svg";
import { useUserContext } from '../../hooks/UserContext.jsx';

export default function Header() {
  const auth = sessionStorage.getItem("userid")
  console.log(auth)
  return (
    <header>
      <nav className="header-navbar">
        <img src={headerLogo} alt="logo" className="headerLogo" />
        <ul className="nav-header-links">
          <NavLink to="/" style={({ isActive }) => ({ color: isActive ? "#6EB636" : "black" })}>
            <li className="nav-header-item">Hompage</li>
          </NavLink>
          {auth != null ? <UserNavigation /> : null}
        </ul>
        <button><Link to="/login">Login</Link></button>
      </nav>
    </header>
  );
}
