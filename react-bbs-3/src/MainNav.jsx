import React from "react";
import { Link, NavLink } from "react-router-dom";

const MainNav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand bg-primary">
        <ul className="navbar-nav text-white">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              HOME
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/bbsWrite" className="nav-link">
              BBS
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link">
              LOGIN
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MainNav;
