import UserNavigation from "./components/Navigation";
import { NavLink, Link } from "react-router-dom";
import headerLogo from "../../assets/logo/DowStack_Logo_Color.svg";
import { useUserContext } from "../../hooks/userContext";

export default function Index() {
  const { user } = useUserContext();
  const auth = sessionStorage.getItem("userid")


  function handleLogout(){
    sessionStorage.removeItem("userid")
    window.location.reload()
    
  }
  return (
    <header>
      <nav className="header-navbar">
        <img src={headerLogo} alt="logo" className="headerLogo" />
        <ul className="nav-header-links">
          <NavLink
            to="/"
            style={({ isActive }) => ({
              color: isActive ? "#6EB636" : "black",
            })}
          >
            <li className="nav-header-item">Hompage</li>
          </NavLink>
          {user || auth != null ? <UserNavigation /> : null}
        </ul> 
        
          {user || auth != null ? <div className={"buttonLink"} onClick={handleLogout}>Logout</div> : <Link className="buttonLink" to="/login">Login</Link>}
       
      </nav>
    </header>
  );
}
