import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../images/logoricknmorty.png";
// or navbar-expand-lg
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      {" "}
      <Link to="/" className="navbar-brand">
        <img src={logo} alt="logo" width="150" />
      </Link>
      <div className="collapse navbar-collapse show ml-sm-5">
        <ul className="navbar-nav">
          <li className="navbar-item">
            <NavLink exact className="nav-link tet-info" to="/">
              Home
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink exact className="nav-link" to="/episode">
              Episodes List
            </NavLink>
          </li>

          <li className="navbar-item">
            <NavLink exact className="nav-link" to="/episodeses">
              Single Episodes
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
