import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import MainContainer from './containers/MainContainer.js';
import Login from './containers/login/Login.js';
import NavBar from './components/NavBar.js';
import ErrorPage from './containers/login/ErrorPage.js'
import Request from './helpers/request.js';

const App = () => {

  const [users, setUsers] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [showCreateAccount, setShowCreateAccount] = useState(false);

  useEffect(() => {
    getUsers();
    console.log(users);
  }, [])

  const getUsers = () => {
    const request = new Request()
    request.get("/users")
    .then((data) => {
      setUsers(data)
    })
  }

  const setUser = (newUser) => {
    setLoggedInUser(newUser);
  }

  const addUser = (newUser) => {
    const updatedUsers = [...users, newUser];
    setUser(updatedUsers);
  }

  return (
    <Router>
    <NavBar/>
      <Routes>
        {!loggedInUser
        ?
        <>
          <Route path="/" element={<Login setUser={setUser} users={users} addUser={addUser} showCreateAccount={showCreateAccount} setShowCreateAccount={setShowCreateAccount}/>}/>
          <Route path="*" element={<ErrorPage/>}/>
        </>
        :
        <>
          <Route path="/" element={<MainContainer loggedInUser={loggedInUser}/>}/>
        </>
        }
      </Routes>
    </Router>
  );
}

export default App;
