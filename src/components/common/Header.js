import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark"
      aria-label="Fifth navbar example"
    >
      <div className="container-lg">
        <NavLink to="/" className="navbar-brand">
          React School
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample05"
          aria-controls="navbarsExample05"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample05">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                to="/teacher-registeration"
                activeclassname="nav-active"
                className="nav-link"
              >
                Teacher Registeration
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/class-registeration"
                activeclassname="nav-active"
                className="nav-link"
              >
                Class Registeration
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
