import React, { useEffect, useState } from 'react';
import './Homepage.css';
import WiiFit from './images/Wii_fit.jpeg';
import Simpsons from './images/The_Simpsons.jpeg';
import HomeImage from './images/home.png'
import RankingsImage from './images/Ranking.png'
import ChartsImage from './images/charts.jpeg'
import UsersImage from './images/users.png'

const App = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 769);
  const [isPhone, setIsPhone] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 769);
      setIsPhone(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="container">
      {isDesktop && (
        <nav className="navbar">
          <a className="navbar-item" href="#">Rank Games</a>
          <a className="navbar-item" href="#">Charts</a>
          <a className="navbar-item" href="#">Users</a>
        </nav>
      )}

      {isPhone && (
        <nav className="phone-navbar">
          <div className="phone-nav-item">
            <img src={HomeImage} alt="Home" className="nav-icon" />
            <span>Home</span>
          </div>
          <div className="phone-nav-item">
            <img src={RankingsImage} alt="Your Rankings" className="nav-icon" />
            <span>Your Rankings</span>
          </div>
          <div className="phone-nav-item">
            <img src={ChartsImage} alt="Charts" className="nav-icon" />
            <span>Charts</span>
          </div>
          <div className="phone-nav-item">
            <img src={UsersImage} alt="Users" className="nav-icon" />
            <span>Users</span>
          </div>
        </nav>
      )}

      <div className="row">
        <div className='gameslist'>
        {isDesktop && (
          <div className="phonegame">
            <h2>Your All Time Top 20 Games</h2>
            <ol>
              <li>Game 1</li>
              <li>Game 2</li>
              <li>Game 3</li>
              <li>Game 4</li>
              <li>Game 5</li>
              <li>Game 6</li>
              <li>Game 7</li>
              <li>Game 8</li>
              <li>Game 9</li>
              <li>Game 10</li>
              <li>Game 11</li>
              <li>Game 12</li>
              <li>Game 13</li>
              <li>Game 14</li>
              <li>Game 15</li>
              <li>Game 16</li>
              <li>Game 17</li>
              <li>Game 18</li>
              <li>Game 19</li>
              <li>Game 20</li>
            </ol>
          </div>
          
        )}
        </div>

        <div className={isDesktop ? "col-lg-8" : "col-12"}>
          <div className="row">
            <div className="col-6">
              <div className="game-item">
                <img src={WiiFit} alt="Wii Fit" className="game-image" />
              </div>
            </div>
            <div className="col-6">
              <div className="game-item">
                <img src={Simpsons} alt="The Simpsons" className="game-image" />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-4">
              <button className="btn btn-primary">Haven't played</button>
            </div>
            <div className="col-4">
              <button className="btn btn-primary">Haven't played either</button>
            </div>
            <div className="col-4">
              <button className="btn btn-primary">Haven't played</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
