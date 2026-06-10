import { NavLink } from "react-router-dom";
import {
  FaGithub,
  FaTrophy,
  FaUsers,
  FaPlusCircle
} from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="brand">
        <FaGithub />
        <h2>AcadTrack</h2>
      </div>

      <div className="nav-links">
        <NavLink to="/">Overview</NavLink>

        <NavLink to="/achievements">
          <FaTrophy />
          <span>Achievements</span>
        </NavLink>

        <NavLink to="/profiles">
          <FaUsers />
          <span>Profiles</span>
        </NavLink>

        <NavLink to="/submit">
          <FaPlusCircle />
          <span>Submit</span>
        </NavLink>

        <NavLink
          to="/login"
          className="login-link"
        >
          Admin
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;