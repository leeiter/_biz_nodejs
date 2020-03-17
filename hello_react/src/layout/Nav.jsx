import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <nav className="main-menu">
      <ul>
        <li>
          <a href="#">home</a>
        </li>
        <li>
          <a href="#">도서보기</a>
        </li>
        <li>
          <a href="#">독서록보가</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
