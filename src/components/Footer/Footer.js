import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

import fblogo from "../../images/icons/facebooklogo.svg";
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
        <a
          href={
            "https://www.facebook.com/Erlebniswelt-Bauernhof-401255466649319/"
          }
        >
          <img src={fblogo} alt="fblogo" />
        </a>
        <a href={"https://www.instagram.com/erlebniswelt_bauernhof/"}>
          <img src={instalogo} alt="instalogo" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
