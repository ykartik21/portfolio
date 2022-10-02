import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="header">
      <div className="nav-container">
        <div className="nav">
          <a href="#intro" className="nav-container-items">
            Home{" "}
          </a>
          <a href="#a-container" className="nav-container-items">
            About{" "}
          </a>
          <a href="#projects" className="nav-container-items">
            {" "}
            Projects
          </a>
          <a href="#contact-container" className="nav-container-items">
            {" "}
            Contact{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
