import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import GameContainer from './GameContainer';
import Login from './login/Login';
import Ranking from '../components/Ranking';

const MainContainer = ({ loggedInUser, setUser, sortByRating, getUser }) => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path='/games/*' element={<GameContainer loggedInUser={loggedInUser} setUser={setUser} sortByRating={sortByRating} getUser={getUser}/>} />
        <Route path='/rankings/*' element={<Ranking loggedInUser={loggedInUser} sortByRating={sortByRating}/>} />
      </Routes>
    </div>
  );
};

export default MainContainer;

