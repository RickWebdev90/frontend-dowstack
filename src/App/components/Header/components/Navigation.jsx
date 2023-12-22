import { NavLink } from "react-router-dom"

export default function Navigation(){
    return (
        <nav>
        <ul>
            <NavLink to="/" style={({isActive})=>({color: isActive ? "red" : "blue"})}>
                <li>Hompage</li>
                </NavLink>
            <NavLink to="/dashboard" style={({isActive})=>({color: isActive ? "red" : "blue"})}>
                <li>Dashboard</li>
            </NavLink>
            <NavLink to="/cashflow" style={({isActive})=>({color: isActive ? "red" : "blue"})}>
                <li>Cashflow</li>
            </NavLink>
            <NavLink to="/savinggoals" style={({isActive})=>({color: isActive ? "red" : "blue"})}>
                <li>Sparziele</li>
            </NavLink>
            <NavLink to="/portfolio" style={({isActive})=>({color: isActive ? "red" : "blue"})}>
                <li>Portfolio</li>
            </NavLink>
            <NavLink to="/login" style={({isActive})=>({color: isActive ? "red" : "blue"})}>
                <li>Login</li>
            </NavLink>
            <NavLink to="/usersettings" style={({isActive})=>({color: isActive ? "red" : "blue"})}>
                <li>UserSettings</li>
            </NavLink>
            <NavLink to="/registration" style={({isActive})=>({color: isActive ? "red" : "blue"})}>
                <li>Registration</li>
            </NavLink>
        </ul>
    </nav>
    )
}