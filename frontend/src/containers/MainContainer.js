import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import GameContainer from './GameContainer';
import Login from './login/Login';

const MainContainer = ({ loggedInUser }) => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path='/games/*' element={<GameContainer loggedInUser={loggedInUser}/>} />
      </Routes>
    </div>
  );
};

export default MainContainer;

