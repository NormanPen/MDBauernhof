import React, { useState } from "react";
import { Link } from "react-router-dom";

import { MenuItems } from "./MenuItems";

import "./Dropdown.scss";

function Dropdown(props) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <div className="dropdown">
      <div
        onClick={handleClick}
        className={`burger-menu ${click ? "active" : ""}`}
      >
        <div>
          <div className="burger-line"></div>
          <div className="burger-line"></div>
          <div className="burger-line"></div>
        </div>
        <div className="burger-txt">{click ? "Menü" : "schließen"}</div>
      </div>

      <nav class="dropdown">
        <ul
          onClick={handleClick}
          className={click ? "dropdown-menu-on" : "dropdown-menu-off"}
        >
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
  );
}

export default Dropdown;
