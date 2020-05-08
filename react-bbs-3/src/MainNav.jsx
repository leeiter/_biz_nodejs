import React from "react";
import { Link, NavLink } from "react-router-dom";

const MainNav = () => {
  const linkStyle = {
    color: "white",
  };
  return (
    <nav className="navbar navbar-expand-sm bg-dark justify-content-center nav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" style={linkStyle} className="nav-link">
            HOME
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/bbsWrite" style={linkStyle} className="nav-link nav-bbs">
            BBS
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/login" style={linkStyle} className="nav-link">
            LOGIN
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
