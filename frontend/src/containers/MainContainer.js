import React from 'react';
import { Route, Routes } from 'react-router-dom';
import GameContainer from './GameContainer.js';
import NavBar from '../components/NavBar.js';

const MainContainer = ({loggedInUser}) => {
    return (
        <div>
            <NavBar />
            <Routes>
                <Route path='/games/*' element={<GameContainer loggedInUser={loggedInUser}/>} />
            </Routes>
        </div>
    );
}

export default MainContainer;