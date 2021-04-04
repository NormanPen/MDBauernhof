import React, { useState } from "react";
import { Link } from "react-router-dom";

import { MenuItems } from "../Data/MenuItems";

import "./Dropdown.scss";

function Dropdown(props) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <div className="dropdown">
      <div className="menu-button">
        <div
          onClick={handleClick}
          className={`burger-item ${click ? "active" : ""}`}
        >
          <div className="burger-line"></div>
          <div className="burger-line"></div>
          <div className="burger-line"></div>
        </div>
        <p>{click ? "schließen" : "Menü"}</p>
      </div>

      <nav>
        <ul
          onClick={handleClick}
          className={click ? "dropdown-menu" : "dropdown-menu-off"}
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
          <div className="footer-sozial">
        <a
          href={
            "https://www.facebook.com/Erlebniswelt-Bauernhof-401255466649319/"
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="social-media-icon social-media-icon-facebook"></div>
        </a>

        <a
          href={
            "https://www.facebook.com/Erlebniswelt-Bauernhof-401255466649319/"
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="social-media-icon social-media-icon-instagram"></div>
        </a>
      </div>
        </ul>
      </nav>
    </div>
  );
}

export default Dropdown;
