import React from "react";
import { NavLink } from "react-router-dom";
import footerLogo from "../../../App/assets/logo/DowStack_Logo_Black.svg"
import "../../../App.css"

export default function Index() {
  return (
    <div >
      <nav className="footer-navbar">
          <img src={footerLogo} alt="logo" className="footerLogo"/>
        <ul className="nav-footer-links">
            <NavLink to="/dashboard" style={({isActive})=>({color: isActive ? "#6EB636" : "black"})}>
                <li className="nav-footer-item">Dashboard</li>
                </NavLink>
            <NavLink to="/cashflow" style={({isActive})=>({color: isActive ? "#6EB636" : "black"})}>
                <li className="nav-footer-item">Cashflow</li>
            </NavLink>
            <NavLink to="/savinggoals" style={({isActive})=>({color: isActive ? "#6EB636" : "black"})}>
                <li className="nav-footer-item">Sparziele</li>
            </NavLink>
            <NavLink to="/portfolio" style={({isActive})=>({color: isActive ? "#6EB636" : "black"})}>
                <li className="nav-footer-item">Vermögen</li>
            </NavLink>
            <NavLink to="/impressum" style={({isActive})=>({color: isActive ? "#6EB636" : "black"})}>
                <li className="nav-footer-item">Impressum</li>
            </NavLink>
            <NavLink to="/team" style={({isActive})=>({color: isActive ? "#6EB636" : "black"})}>
                <li className="nav-footer-item">Team</li>
            </NavLink>
            <NavLink to="/github" style={({isActive})=>({color: isActive ? "#6EB636" : "black"})}>
                <li className="nav-footer-item">Github</li>
            </NavLink>
        </ul>
    </nav>
    </div>
  );
}
