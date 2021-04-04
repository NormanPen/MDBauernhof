import React from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "../Data/MenuItems";
import Dropdown from "./Dropdown";

import "./Navigation.scss";
import logo from "../../images/MDBauernhofLogo.svg";

function Navigation() {
  return (
    <div className="navigation">
      <img src={logo} alt="Logo" className="logo" />
      <Dropdown />

      <div className="nav-container">
        <nav>
          <ul>
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link className={item.className} to={item.path}>
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navigation;
