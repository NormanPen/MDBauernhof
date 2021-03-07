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
        <Link to="/about">
          <li>Über Uns</li>
        </Link>
        <Link to="/programm">
          <li>Programm</li>
        </Link>
        <Link to="/animals">
          <li>Unsere Tiere</li>
        </Link>
        <Link to="/contact">
          <li>Kontakt</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;