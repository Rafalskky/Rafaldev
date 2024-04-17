import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/Menu.sass';

const Menu = () => (
    <nav className="menu">
        <ul className="menu-list">
            <li className="menu-item">
                <Link to="/">Startsida</Link>
            </li>
            <li className="menu-item">
                <Link to="/about">Om mig</Link>
            </li>
            <li className="menu-item">
                <Link to="/my-projects">Mina projekt</Link>
            </li>
            <li className="menu-item">
                <Link to="/kontakt">Kontakt</Link>
            </li>
        </ul>
    </nav>
);

export default Menu;
