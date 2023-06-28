import React, { useEffect, useState } from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import './GameContainer.css';
import Request from '../helpers/request';
import GameDetail from '../components/games/GameDetail';
import Game from '../components/games/Game';


const GameContainer = () => {

    const [games, setGames] = useState([]);
    const [gameOne, setGameOne] = useState();
    const [gameTwo, setGameTwo] = useState();
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 769);
    const [isPhone, setIsPhone] = useState(window.innerWidth <= 768);
    
    const [stateGame, setStateGame] = useState({
      name: "",
      slug: "",
      image: "",
      genre: "",
      description: "",
      year: null,
      platform: null
    });
    
    const request = new Request();
    const url = "/api/games";

    useEffect(() => {

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

    const handleClick = (game) => {
      const newGame = {
        "name": game.name,
        "slug": game.slug,
        "image": game.background_image,
        "genre": game.genres[0].name
      }

      addGame(newGame);

      if (!findGameBySlug(game.slug)) {
        request.post(url, newGame);
      }
      getGameOne();
      getGameTwo();
    }

    const addGame = (newGame) => {
      const updatedGames = [...games, newGame];
      setGames(updatedGames);
    }

    const randomInt = (min, max) => {
      return Math.floor(Math.random() * max) + min;
    }

    const getGameOne = () => {

        fetch("https://api.rawg.io/api/games?page=" + randomInt(1, 500) + "&page_size=40&key=" + process.env.REACT_APP_API_KEY)
        .then((response) => response.json())
        .then((data) => setGameOne(data.results[randomInt(0, 39)]))
    }

    const getGameTwo = () => {

        fetch("https://api.rawg.io/api/games?page=" + randomInt(1, 500) + "&page_size=40&key=" + process.env.REACT_APP_API_KEY)
        .then((response) => response.json())
        .then((data) => setGameTwo(data.results[randomInt(0, 39)]))
    }

    const getBothGames = () => {
      getGameOne();
      getGameTwo();
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
      <div className="row">
        <div className='gameslist'>
        {isDesktop && (
          <div className="phonegame">
            <h2>Your Top 100</h2>
            <ol>
              <li>Wii Sports</li>
              <li>Wii Sports Resort</li>
              <li>Wii Sports Legacy</li>
              <li>Wii Sports Club</li>
              <li>Wii Fit</li>
              <li>Wii Party</li>
              <li>Wii Play</li>
              <li>Wii Fit Plus</li>
              <li>RockBand</li>
              <li>Mario and Sonic Olympics</li>
              <li> Just Dance 4</li>
              <li>Big Brain Academy</li>
              <li>Disney’s Extreme Skate Adventure</li>
              <li>Simpsons Hit & Run</li>
              <li>The Simpsons Wrestling</li>
              <li>The Simpsons Game</li>
              <li>Fifa Street 2</li>
              <li>Wii Sports 2</li>
              <li>WWE2K17</li>
              <li>Mincecraft</li>
              <li>Wii Sports</li>
              <li>Wii Sports Resort</li>
              <li>Wii Sports Legacy</li>
              <li>Wii Sports Club</li>
              <li>Wii Fit</li>
              <li>Wii Party</li>
              <li>Wii Play</li>
              <li>Wii Fit Plus</li>
              <li>RockBand</li>
              <li>Mario and Sonic Olympics</li>
              <li> Just Dance 4</li>
              <li>Big Brain Academy</li>
              <li>Disney’s Extreme Skate Adventure</li>
              <li>Simpsons Hit & Run</li>
              <li>The Simpsons Wrestling</li>
              <li>The Simpsons Game</li>
              <li>Fifa Street 2</li>
              <li>Wii Sports 2</li>
              <li>WWE2K17</li>
              <li>Mincecraft</li>
              <li>Wii Sports</li>
              <li>Wii Sports Resort</li>
              <li>Wii Sports Legacy</li>
              <li>Wii Sports Club</li>
              <li>Wii Fit</li>
              <li>Wii Party</li>
              <li>Wii Play</li>
              <li>Wii Fit Plus</li>
              <li>RockBand</li>
              <li>Mario and Sonic Olympics</li>
              <li> Just Dance 4</li>
              <li>Big Brain Academy</li>
              <li>Disney’s Extreme Skate Adventure</li>
              <li>Simpsons Hit & Run</li>
              <li>The Simpsons Wrestling</li>
              <li>The Simpsons Game</li>
              <li>Fifa Street 2</li>
              <li>Wii Sports 2</li>
              <li>WWE2K17</li>
              <li>Mincecraft</li>
              <li>Wii Sports</li>
              <li>Wii Sports Resort</li>
              <li>Wii Sports Legacy</li>
              <li>Wii Sports Club</li>
              <li>Wii Fit</li>
              <li>Wii Party</li>
              <li>Wii Play</li>
              <li>Wii Fit Plus</li>
              <li>RockBand</li>
              <li>Mario and Sonic Olympics</li>
              <li> Just Dance 4</li>
              <li>Big Brain Academy</li>
              <li>Disney’s Extreme Skate Adventure</li>
              <li>Simpsons Hit & Run</li>
              <li>The Simpsons Wrestling</li>
              <li>The Simpsons Game</li>
              <li>Fifa Street 2</li>
              <li>Wii Sports 2</li>
              <li>WWE2K17</li>
              <li>Mincecraft</li>
              <li>Wii Sports</li>
              <li>Wii Sports Resort</li>
              <li>Wii Sports Legacy</li>
              <li>Wii Sports Club</li>
              <li>Wii Fit</li>
              <li>Wii Party</li>
              <li>Wii Play</li>
              <li>Wii Fit Plus</li>
              <li>RockBand</li>
              <li>Mario and Sonic Olympics</li>
              <li> Just Dance 4</li>
              <li>Big Brain Academy</li>
              <li>Disney’s Extreme Skate Adventure</li>
              <li>Simpsons Hit & Run</li>
              <li>The Simpsons Wrestling</li>
              <li>The Simpsons Game</li>
              <li>Fifa Street 2</li>
              <li>Wii Sports 2</li>
              <li>WWE2K17</li>
              <li>Mincecraft</li>
            </ol>
          </div>
          
        )}
        </div>

        <div className={isDesktop ? "col-lg-8" : "col-12"}>
          <div className="row">
            <Game game={gameOne} handleClick={handleClick} />
            <Game game={gameTwo} handleClick={handleClick} />
          </div>

          <div className="row">
            <div className="col-4">
              <button className="btn btn-primary" onClick={getGameOne}>Haven't played</button>
            </div>
            <div className="col-4">
              <button className="btn btn-primary" onClick={getBothGames}>Haven't played either</button>
            </div>
            <div className="col-4">
              <button className="btn btn-primary" onClick={getGameTwo}>Haven't played</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}

export default GameContainer;