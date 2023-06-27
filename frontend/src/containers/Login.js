import React from 'react';

import './Login.css';
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";
import profileImage from './images/jb.jpeg';

function Login() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="login-form">
          <div className="profile-picture">
            <img src={profileImage} alt="Profile" />
          </div>
          <div className="user-info">
            <span className="user-name">Name</span>
          </div>
          <div className="form-group">
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <Button className="login-button">Login</Button>
            <div className="forgot-password">
              <Button variant="link">Forgotten Password?</Button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Login;