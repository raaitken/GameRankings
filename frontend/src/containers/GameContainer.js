import React, { useEffect, useState } from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import './GameContainer.css';
import Request from '../helpers/request';
import GameDetail from '../components/games/GameDetail';
import HomeImage from '../containers/images/home.png'
import RankingsImage from '../containers/images/Ranking.png'
import ChartsImage from '../containers/images/charts.jpeg'
import UsersImage from '../containers/images/users.png'
import WiiFit from '../containers/images/Wii_fit.jpeg';
import Simpsons from '../containers/images/The_Simpsons.jpeg';


const GameContainer = () => {

    const [games, setGames] = useState([]);
    const [gameOne, setGameOne] = useState();
    const [gameTwo, setGameTwo] = useState();
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 769);
    const [isPhone, setIsPhone] = useState(window.innerWidth <= 768);

    useEffect(() => {
      const request = new Request();

      const gamePromise = request.get('/api/games');

      Promise.all([gamePromise])
        .then((data) => {
          setGames(data[0]);
        })

        getGameOne();
        getGameTwo();

        const handleResize = () => {
          setIsDesktop(window.innerWidth >= 769);
          setIsPhone(window.innerWidth <= 768);
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };

        // setGamesFunc();
    }, [])

    const randomInt = (min, max) => {
      return Math.floor(Math.random() * max) + min;
    }

    const getGameOne = () => {

        const newFetch = fetch("https://api.rawg.io/api/games?page=" + randomInt(1, 500) + "&page_size=40&key=" + process.env.REACT_APP_API_KEY)
        .then((response) => response.json())
        .then((data) => setGameOne(data.results[randomInt(0, 39)]))
    }

    const getGameTwo = () => {

        const newFetch = fetch("https://api.rawg.io/api/games?page=" + randomInt(1, 500) + "&page_size=40&key=" + process.env.REACT_APP_API_KEY)
        .then((response) => response.json())
        .then((data) => setGameTwo(data.results[randomInt(0, 39)]))
    }

    const findGameBySlug = (slug) => {
      return games.find((game) => {
        return game.slug === slug;
      })
    };

    const GameDetailWrapper = () => {
      const { slug } = useParams();
      let foundGame = findGameBySlug(slug);

      return <GameDetail game={foundGame} />;
    }

    const GetRandomIndex = () => {
      const randomIndex = Math.floor(Math.random() * games.length);
      return randomIndex;
    }

    // const setGamesFunc = () => {
    //   setGameOne(games[GetRandomIndex()]);
    //   setGameTwo(games[GetRandomIndex()]);
    // }

    function Probability(rating1, rating2) {
      return (
          (1.0 * 1.0) / (1 + 1.0 * Math.pow(10, (1.0 * (rating1 - rating2)) / 400))
      );
      }

      function EloRating(Ra, Rb, K, d) {
        // To calculate the Winning
        // Probability of Player B
        let Pb = Probability(Ra, Rb);
        
        // To calculate the Winning
        // Probability of Player A
        let Pa = Probability(Rb, Ra);
        
        // Case 1 When Player A wins
        // Updating the Elo Ratings
        if (d === true) {
            Ra = Ra + K * (1 - Pa);
            Rb = Rb + K * (0 - Pb);
        }
        
        // Case 2 When Player B wins
        // Updating the Elo Ratings
        else {
            Ra = Ra + K * (0 - Pa);
            Rb = Rb + K * (1 - Pb);
        }
      }

    return (
      <div className="container">
      {isDesktop && (
        
        <nav className="navbar">
  <a className="navbar-item" href="#">Rank Games</a>
  <a style={{ color: '#9A2AE9' }}> space</a>
  <a className="navbar-item" href="#">Charts</a>
  <a style={{ color: '#9A2AE9' }}> space</a>
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

export default GameContainer;