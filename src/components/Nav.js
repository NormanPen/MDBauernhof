import React from 'react';

import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <h3>Logo</h3>
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
  );
}

export default Nav;