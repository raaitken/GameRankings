import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import './Login.css';
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";
import profileImage from '../images/jb.jpeg';
import CreateAccount from './CreateAccount.js';


const Login = ({users, setUser, loggedIn, addUser, showCreateAccount, setShowCreateAccount}) => {

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [showImage, setShowImage] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleShowCreateAccount = () => {
    setShowCreateAccount(!showCreateAccount);
  }
  const handleForgottenPassword = () => {
    setShowImage(!showImage);
  };
  

  const handleLogin = (e) => {
    e.preventDefault();

    let userFound = false;
    for(let user of users){

      if(user.name === name && user.password === password){
        setUser(user);
        // localStorage.setItem('user', JSON.stringify(user));
        userFound = true;
        break;
      }
    }

    if (userFound) {
      setShowAlert(false);
      return <Link to="/games" />;
    } else {
      setShowAlert(true);
    }
  };

  if (loggedIn) {
    return <Navigate to="/games"/>;
  }

  return (
    <div className="App">
      {showCreateAccount ? (
        <CreateAccount users={users} addUser={addUser} />
      ) : (
        <>
          <div className="user-info"></div>
          <div className="form-group">
            {showAlert && (
              <div className="alert" role="alert">
                Invalid username or password!
              </div>
            )}
            <input
              type="text"
              placeholder="Login"
              name="login"
              id="login"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <input
              type="password"
              placeholder="Password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <Button className="login-button" onClick={handleLogin}>
              Login
            </Button>
            <div className="forgot-password">
              <Button variant="link" onClick={handleForgottenPassword}>
                Forgotten Password?
              </Button>
            </div>
            {showImage && (
            <img src={profileImage} alt="Forgotten Password" className="password-image spin-image" />

            )}
          </div>
          <Button className="create-account" onClick={handleShowCreateAccount}>
            Create Account
          </Button>
        </>
      )}
    </div>
  );
}

export default Login;
