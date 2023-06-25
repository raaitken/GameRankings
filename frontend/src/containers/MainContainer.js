import React from 'react';
import { Route, Routes } from 'react-router-dom';
import GameContainer from './GameContainer';
import NavBar from '../components/NavBar';

const MainContainer = () => {
    return (
        <div>
            <NavBar />
            <Routes>
                <Route path='/games/*' element={<GameContainer />} />
            </Routes>
        </div>
    );
}
 
export default MainContainer;