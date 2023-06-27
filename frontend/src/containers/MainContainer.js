import React from 'react';
import { Route, Routes } from 'react-router-dom';
import GameContainer from './GameContainer';
import NavBar from '../components/NavBar';
import Login from './Login';

const MainContainer = () => {
    return (
        <div>
            <NavBar />
            <Routes>
                <Route path='/login' element={<Login />}/>
                <Route path='/games/*' element={<GameContainer />} />
            </Routes>
        </div>
    );
}
 
export default MainContainer;