import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavBar.css';
import HomeImage from '../containers/images/home.png';
import RankingsImage from '../containers/images/Ranking.png';
import ChartsImage from '../containers/images/charts.jpeg';
import UsersImage from '../containers/images/users.png';
import LogImage from '../containers/images/logout.png';

const NavBar = ({ setUser, loggedInUser }) => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleLogout = () => {
    setUser(null);
  };

  if (!loggedInUser) {
    return null; // Return null to hide the navigation bar
  }

  if (isMobile) {
    return (
      <nav className="phone-navbar">
        <Link to="/games" className="phone-nav-item">
          <img src={HomeImage} alt="Home" className="nav-icon" />
          <span>Home</span>
        </Link>
        <Link to="/rankings" className="phone-nav-item">
          <img src={RankingsImage} alt="Your Rankings" className="nav-icon" />
          <span>Your Rankings</span>
        </Link>
        <Link to="/charts" className="phone-nav-item">
          <img src={ChartsImage} alt="Charts" className="nav-icon" />
          <span>Charts</span>
        </Link>
        <Link to="/user" className="phone-nav-item">
          <img src={UsersImage} alt="Users" className="nav-icon" />
          <span>Users</span>
        </Link>
        <button className="but" onClick={handleLogout}>
        <img src={LogImage} alt="Users" className="nav-icon" />
          <span>Log Out</span>
        </button>
      </nav>
    );
  }

  return (
    <div className="navbar">
      <nav>
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link to="/games">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/charts">Charts</Link>
          </li>
          <li className="navbar-item">
            <Link to="/user">User</Link>
          </li>
          <button className="button logout" onClick={handleLogout}>
            Logout
          </button>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;