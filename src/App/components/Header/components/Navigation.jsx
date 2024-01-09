import { NavLink, Link } from "react-router-dom"


export default function UserNavigation(){
    return (
            <>
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
            </>   
     )
}