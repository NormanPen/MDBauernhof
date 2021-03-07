import React from 'react';

import './Footer.scss';


import { Link } from 'react-router-dom';

function Footer() {
    return (
        
        <div id="asd">
            <div>
            <h3>Erleben</h3>
            <ul>
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

            <div>
                <h3>Kontakt</h3>
            <ul>
                <Link to="/Kontakt">
                    <li>Über Uns</li>
                </Link>
                <Link to="/Impressum">
                    <li>Impressum</li>
                </Link>
                
            </ul>   

            <div>
                <p>Facebook Link</p>
                <p>Instagram Link</p>
                
            </div> 
            </div>
        </div>
    );
}

export default Footer;