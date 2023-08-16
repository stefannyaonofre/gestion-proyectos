import React from "react";
import logo from "/images/document.svg"
import "./nav.scss"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src={logo}
            alt="Logo"
            className="d-inline-block align-text-top"
          />
          ProManager
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
