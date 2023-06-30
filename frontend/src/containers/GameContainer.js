import React, { useEffect, useState } from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import './GameContainer.css';
import Request from '../helpers/request';
import GameDetail from '../components/games/GameDetail';
import Game from '../components/games/Game';


const GameContainer = ({loggedInUser}) => {

    const [games, setGames] = useState([]);
    const [gameUsers, setGameUsers] = useState([]);
    const [gameOne, setGameOne] = useState();
    const [gameTwo, setGameTwo] = useState();
    const [gameRatingOne, setGameRatingOne] = useState();
    const [gameRatingTwo, setGameRatingTwo] = useState();
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 769);
    const [isPhone, setIsPhone] = useState(window.innerWidth <= 768);

    

    useEffect(() => {
      const request = new Request();

      const gamePromise = request.get('/api/games');

      Promise.all([gamePromise])
        .then((data) => {
          setGames(data[0]);
        })
        .then(getBothGames());

        const handleResize = () => {
          setIsDesktop(window.innerWidth >= 769);
          setIsPhone(window.innerWidth <= 768);
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
    }, [])

    const handleClick = () => {
      const newGameOne = {
        "id": gameOne.id,
        "name": gameOne.name,
        "slug": gameOne.slug,
        "image": gameOne.image,
        "genre": gameOne.genre
      }

      const newGameTwo = {
        "id": gameTwo.id,
        "name": gameTwo.name,
        "slug": gameTwo.slug,
        "image": gameTwo.image,
        "genre": gameTwo.genre
      }

      const gameRatingOne = {
        "game_id": gameOne,
        "user_id": loggedInUser,
        "rating": 1200
      }

      const gameRatingTwo = {
        "game_id": gameTwo,
        "user_id": loggedInUser,
        "rating": 1200
      }

      getBothGames();
    }

    const GetRandomIndex = () => {
      return Math.floor(Math.random() * games.length);
    }

    const getGameOne = () => {
      setGameOne(games[GetRandomIndex()]);
    }

    const getGameTwo = () => {
      setGameTwo(games[GetRandomIndex()]);
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
              {gameRatingsNodes}
            </ol>
          </div>
          
        )}
        </div>
        <div className='pics'>

        <div className={isDesktop ? "col-lg-8" : "col-12"}>
          <div className="row">
            <Game game={gameOne} handleClick={handleClick} />
            <Game game={gameTwo} handleClick={handleClick} />
          </div>

          <div className="row">
          <div className="col-4">

  <button className="btn btn-primary custom-button" onClick={getGameOne}>
    Haven't played
  </button>
</div>
<div className="col-4">
  <button className="btn btn-primary custom-button">
    Haven't played either
  </button>
</div>
<div className="col-4">
  <button className="btn btn-primary custom-button" onClick={getGameTwo}>
    Haven't played
  </button>
</div>
          </div>
        </div>
      </div>
    </div>
    </div>
    );
}

export default GameContainer;