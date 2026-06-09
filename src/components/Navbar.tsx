import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>AwardTrack</h2>

      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/achievements">Achievements</NavLink>
        <NavLink to="/profiles">Profiles</NavLink>
        <NavLink to="/submit">Submit</NavLink>
        <NavLink to="/login" className="login-link">
          Admin
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;