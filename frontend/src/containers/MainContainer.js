import React from 'react';

import { Route, Routes, useLocation } from 'react-router-dom';
import NavBar from '../components/NavBar';

import GameContainer from './GameContainer';
import Login from './login/Login';

const MainContainer = ({loggedInUser}) => {
  const location = useLocation();

  // Check if the current route is the login page
  const isLoginPage = location.pathname === '/login';

  return (
    <div>
      {!isLoginPage && <NavBar />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path='/games/*' element={<GameContainer loggedInUser={loggedInUser}/>} />
      </Routes>
    </div>
  );
};

export default MainContainer;
