import React from 'react';
import './style.scss';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className = 'navlist'>
      <ul className = 'navlist_ul'>
        <li>
          <NavLink to="/personal-portfolio" activeClassName="active" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/education" activeClassName="active">
            Education
          </NavLink>
        </li>
        <li>
          <NavLink to="/experience" activeClassName="active">
            Experience
          </NavLink>
        </li>
        <li>
          <NavLink to="/skills" activeClassName="active">
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
