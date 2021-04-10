
import React from "react";
import { Link } from "react-router-dom";
import { ErlebenItems, KontaktItems } from "../Data/FooterItems";

import "./Footer.scss";

function Footer() {
  return (
    <footer>
      <div className="footer-erleben">
        <ul>
          <h3>Erleben</h3>
          {ErlebenItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.className} to={item.path}>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="footer-kontakt">
        <ul>
          <h3>Kontakt</h3>
          {KontaktItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.className} to={item.path}>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

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
    </footer>
  );
}

export default Footer;
