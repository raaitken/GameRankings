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
    getUsers()
    // get user from localstorage
    const loggedUser = localStorage.getItem("user")
    // if user exists in storage set to state
    if (loggedUser) {
      const foundUser = JSON.parse(loggedUser)
      setUser(foundUser);
    }
  }, [])

  const getUsers = () => {
    const request = new Request()
    request.get("/api/users")
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

  const sortByRating = () => {
    /* findIndex() required to calculate the logged in user's index of gameUsers array */
    const gameRatings = loggedInUser.games.sort((gameA, gameB) => gameB.gameUsers[gameB.gameUsers.findIndex(i => i.id.user_id === loggedInUser.id)].rating - gameA.gameUsers[gameA.gameUsers.findIndex(i => i.id.user_id === loggedInUser.id)].rating);
    console.log(gameRatings);
    const gameRatingsNodes = gameRatings.map((gameRating, index) => {
      return <li key={index}>{gameRating.name}</li>
    })
    return gameRatingsNodes
  }

  return (
    <Router>
      {loggedInUser && <NavBar setUser={setUser} loggedInUser={loggedInUser}/>} {/* Show navigation bar only if user is logged in */}
      <Routes>
        {!loggedInUser ? (
          <>
            <Route
              path="/*"
              element={<Login setUser={setUser} users={users} addUser={addUser} showCreateAccount={showCreateAccount} setShowCreateAccount={setShowCreateAccount} />}
            />
            <Route path="*" element={<ErrorPage />} />
          </>
        ) : (
          <>
            <Route path="/*" element={<MainContainer loggedInUser={loggedInUser} sortByRating={sortByRating}/>} />
          </>
        )}
      </Routes>
    </Router>
  );
};

export default App;