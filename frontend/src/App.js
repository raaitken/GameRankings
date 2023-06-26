import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import React from 'react';
import MainContainer from './containers/MainContainer';
import Login from './containers/Login';

function App() {
  return (
    <Router>
      <MainContainer />
      <Login/>
    </Router>
  );
}

export default App;
