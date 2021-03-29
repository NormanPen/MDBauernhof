import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Burger.scss";

import logo from "../../images/MDBauernhofLogo.svg";

const ToggleBurger = () => {
  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <div className="Navigation">
      <div
        onClick={handleToggle}
        className={`burger-menu ${isActive ? "active" : ""}`}
      >
        <div className="burger-menu">
          <div className="burger-line"></div>
          <div className="burger-line"></div>
          <div className="burger-line"></div>
        </div>
      </div>
      <img src={logo} alt="Logo" className="logo" />
      <div className={isActive ? "nav-container" : "nav-container-off"}>
        <nav class="user-nav">
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/Überuns">
              <li>Über Uns</li>
            </Link>
            <Link to="/Programm">
              <li>Programm</li>
            </Link>
            <Link to="/Tiere">
              <li>Unsere Tiere</li>
            </Link>
            <Link to="/Kontakt">
              <li>Kontakt</li>
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default ToggleBurger;

/*<div className={isActive ? "green" : "red"}>
      <h2>Hlasdas</h2>
      <div className={isActive ? "red" : "green"}>
        <h1>Hallo</h1>
      </div> */
