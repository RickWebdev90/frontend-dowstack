import { NavLink, Link } from "react-router-dom"
import headerLogo from "/Users/ricklochner/Coding Projekte/Dowstack/frontend-dowstack/src/App/assets/logo/DowStack_Logo_Color.svg"

export default function Navigation(){
    return (
        <nav className="header-navbar">
            <img src={headerLogo} alt="logo" className="headerLogo"/>
        <ul className="nav-header-links">
            <NavLink to="/" style={({isActive})=>({color: isActive ? "#6EB636" : "black"})}>
                <li className="nav-header-item">Hompage</li>
                </NavLink>
            <NavLink to="/dashboard" style={({isActive})=>({color: isActive ? "#6EB636" : "black"})}>
                <li className="nav-header-item">Dashboard</li>
            </NavLink>
            <NavLink to="/cashflow" style={({isActive})=>({color: isActive ? "#6EB636" : "black"})}>
                <li className="nav-header-item">Cashflow</li>
            </NavLink>
            <NavLink to="/savinggoals" style={({isActive})=>({color: isActive ? "#6EB636": "black"})}>
                <li className="nav-header-item">Sparziele</li>
            </NavLink>
            <NavLink to="/portfolio" style={({isActive})=>({color: isActive ? "#6EB636" : "black"})}>
                <li className="nav-header-item">Portfolio</li>
            </NavLink>
            <NavLink to="/usersettings" style={({isActive})=>({color: isActive ? "#6EB636" : "black"})}>
                <li className="nav-header-item">UserSettings</li>
            </NavLink>
        </ul>
    <button><Link to="/login">Login</Link></button>
    </nav>
    )
}