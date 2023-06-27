import React from 'react';
import './Login.css';
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";
import profileImage from './images/jb.jpeg';

function Login() {
  return (
    <div className="blurred-box">
      <div className="user-login-box">
        <span className="user-icon"></span>
        <div className="user-name">Name</div>
        <input className="user-password" type="text" placeholder="Username" />
        <input className="user-password" type="password" placeholder="Password" />
        <Button className="login-button">Login</Button>
        <div className="forgot-password">
          <Button variant="link">Forgotten Password?</Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
