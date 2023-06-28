import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className="navbar">
      <nav>
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link to="/">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/rankings">Your Rankings</Link>
          </li>
          <li className="navbar-item">
            <Link to="/charts">Charts</Link>
          </li>
          <li className="navbar-item">
            <Link to="/user">User</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
