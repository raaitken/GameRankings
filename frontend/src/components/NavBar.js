import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  if (isLoginPage) {
    return null; // Render nothing if it's the login page
  }

  return (
    <div className="navbar">
      <nav>
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link to="/games">Home</Link>
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
