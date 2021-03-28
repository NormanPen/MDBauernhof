import React from "react";
import { Link } from "react-router-dom";
import Burger from "./Burger/Burger";

import "./Navigation.scss";
import logo from "../../images/MDBauernhofLogo.svg";

function Navigation() {
  return (
    <div className="Navigation">
      <div className="nav-container">
        <img src={logo} alt="Logo" className="logo" />
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
      <Burger className="burger-menu"></Burger>
    </div>
  );
}

export default Navigation;
