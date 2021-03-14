import React from "react";
import { Link } from "react-router-dom";

import "./Footer.scss";

import instalogo from "../../images/icons/Instagramlogo.svg";

function Footer() {
  return (
    <footer>
      <div className="footer-erleben">
        <ul>
          <h3>Erleben</h3>
          <Link to="/Überuns">
            <li>Über Uns</li>
          </Link>
          <Link to="/Programm">
            <li>Programm und kindergeburtstage</li>
          </Link>
          <Link to="/Tiere">
            <li>Unsere Tiere</li>
          </Link>
        </ul>
      </div>

      <div className="footer-kontakt">
        <ul>
          <h3>Kontakt</h3>
          <Link to="/Kontakt">
            <li>Kontakt</li>
          </Link>
          <Link to="/Impressum">
            <li>Impressum</li>
          </Link>
        </ul>
      </div>

      <div className="footer-sozial">
        <div className="footer-sozial-background">
          <a
            href={
              "https://www.facebook.com/Erlebniswelt-Bauernhof-401255466649319/"
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="icon facebooklink" />
          </a>
        </div>
        <div>
          <a
            href={"https://www.instagram.com/erlebniswelt_bauernhof/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="icon icon-arrow"></div>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
