import React, {useState} from 'react';
import {Link, Navigate} from 'react-router-dom'
import './Login.css';
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";
import profileImage from '../images/jb.jpeg';
import CreateAccount from './CreateAccount.js'

const Login = ({users, setUser, loggedIn, addUser, showCreateAccount, setShowCreateAccount}) => {

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleShowCreateAccount = () => {
    setShowCreateAccount(!showCreateAccount);
  }

  const handleLogin = (e) => {
    e.preventDefault()
    for(let user of users){
        if(user.name === name && user.password === password){
            setUser(user)
        }
    }
    return <Link to="/"/>
  };

  if (loggedIn) {
    return <Navigate to="/"/>;
  }

  return (
    <div className="App">
      {showCreateAccount
      ?
      <CreateAccount users={users} addUser={addUser}/>
      :
      <>
        <div className="profile-picture">
          <img src={profileImage} alt="Profile" />
        </div>
        <div className="user-info">
          <span className="user-name">Name</span>
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <Button className="login-button" onClick={handleLogin}>Login</Button>
          <div className="forgot-password">
            <Button variant="link">Forgotten Password?</Button>
          </div>
        </div>
        <Button className='create-account' onClick={handleShowCreateAccount}>Create Account</Button>
        </>}
      </div>
  );
}

export default Login;