import React from "react";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <img style={{ cursor: "pointer" }} src={logo} alt="logo" />
      <div className="nav-container">
        <nav>
          <ul>
            <li>
              <a href="/shop">shop</a>
            </li>
            <li>
              <a href="/review">order review</a>
            </li>
            <li>
              <a href="/inventory">manage inventory</a>
            </li>
            <li>
              <a href="/blog">blog</a>
            </li>
            <li>
              <a href="/contact">contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
