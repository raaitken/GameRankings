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
    const [gameRatingOne, setGameRatingOne] = useState({
      "game": "",
      "user": "",
      "rating": 0
    });
    const [gameRatingTwo, setGameRatingTwo] = useState({
      "game": "",
      "user": "",
      "rating": 0
    });
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 769);
    const [isPhone, setIsPhone] = useState(window.innerWidth <= 768);
    const [loading, setLoading] = useState(false);
    const [gameOneWin, setGameOneWin] = useState(false);

    const ratingsUrl = '/api/gameratings';
    const request = new Request();

    useEffect(() => {

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
    }, [gameRatingOne, gameRatingTwo])

    const handleClick = (game) => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000);

      const gameRatingOne = {
        "game": gameOne,
        "user": loggedInUser,
        "rating": 1200
      }

      const gameRatingTwo = {
        "game": gameTwo,
        "user": loggedInUser,
        "rating": 1200
      }

      handleRatingsPost(gameOne, gameTwo);
      
      getBothGames();
    }

    const handleRatingsPost = (gameOne, gameTwo) => {

      let gameOneObject = {};
      let gameTwoObject = {};

      if (!findGameById(gameOne.id)) {
      gameOneObject = {
        "game": gameOne.slug,
        "user": loggedInUser.name,
        "rating": 1200
      }
    } else {

    }

    if (!findGameById(gameTwo.id)) {
      gameTwoObject = {
        "game": gameTwo.slug,
        "user": loggedInUser.name,
        "rating": 1200
      }
    } else {
      
    }
      if (!findGameById(gameOne.id)) {
        setGameRatingOne(gameOneObject)
      }

      if (!findGameById(gameTwo.id)) {
        setGameRatingTwo(gameTwoObject)
      }

        EloRating(gameOneObject, gameTwoObject, 30, true)
        request.post(ratingsUrl, gameOneObject);
        request.post(ratingsUrl, gameTwoObject);
    }

    const GetRandomIndex = () => {
      return Math.floor(Math.random() * games.length);
    }

    if (!loggedInUser.games) {
      return "Loading....."
    }

    // Sort list by rating
    const gameRatings = loggedInUser.games.sort((gameA, gameB) => gameB.gameUsers[0].rating - gameA.gameUsers[0].rating);

    const gameRatingsNodes = gameRatings.map((gameRating, index) => {
      return <li key={index}>{gameRating.name}</li>
    })

    const getGameOne = () => {
      while (true) {
        const newGame = games[GetRandomIndex()];
        if (!newGame) {
          return "Loading....."
        }
        if (newGame.id !== gameTwo.id && newGame.id !== gameOne.id){
          setGameOne(newGame);
          break
        }
      }
    }

    const getGameTwo = () => {
      while (true) {
        const newGame = games[GetRandomIndex()];
        if (!newGame) {
          return "Loading....."
        }
        if (newGame.id !== gameOne.id && newGame.id !== gameTwo.id){
          setGameTwo(newGame);
          break
        }
      }
    }
    
    const getBothGames = () => {
      while (true) {
        const newGameOne = games[GetRandomIndex()];
        const newGameTwo = games[GetRandomIndex()];
        if (!newGameOne && !newGameTwo) {
          return "Loading....."
        }
        if (newGameOne.id !== newGameTwo.id) {
          setGameOne(newGameOne);
          setGameTwo(newGameTwo);
          break
        }
      }
    }

    const findGameById = (id) => {
      return loggedInUser.games.find((game) => {
        return game.id === id;
      })
    };

    function Probability(rating1, rating2) {
      return (
          (1.0 * 1.0) / (1 + 1.0 * Math.pow(10, (1.0 * (rating1 - rating2)) / 400))
      );
      }

      function EloRating(Ra, Rb, K, d) {
        // To calculate the Winning
        // Probability of Player B
        let Pb = Probability(Ra.rating, Rb.rating);
        
        // To calculate the Winning
        // Probability of Player A
        let Pa = Probability(Rb.rating, Ra.rating);
        
        // Case 1 When Player A wins
        // Updating the Elo Ratings
        if (d === true) {
            Ra.rating = Ra.rating + K * (1 - Pa);
            Rb.rating = Rb.rating + K * (0 - Pb);
            
        }
        
        // Case 2 When Player B wins
        // Updating the Elo Ratings
        else {
            Ra.rating = Ra.rating + K * (0 - Pa);
            Rb.rating = Rb.rating + K * (1 - Pb);
        }

        setGameRatingOne(Ra);
        setGameRatingTwo(Rb);
      }

    return (
      <div className="container">
      <div className="row">
        <div className='gameslist'>
        {isDesktop && (
          <div className="phonegame">
            <h2>Your Top Games</h2>
            <ol>
              {gameRatingsNodes}
            </ol>
          </div>
          
        )}
        </div>
        <div className='pics'>

        <div className={isDesktop ? "col-lg-8" : "col-12"}>
          <div className="row">
          {loading ? (
            <div className="loading-bar">Saving your choice...</div>
            ) : (
              <>
              <Game game={gameOne} handleClick={handleClick} />
              <Game game={gameTwo} handleClick={handleClick} />
            </>
          )}
          </div>
        

          <div className="row">
          <div className="col-4">

  <button className="btn btn-primary custom-button" onClick={getGameOne}>
    Haven't played
  </button>
</div>
<div className="col-4">
  <button className="btn btn-primary custom-button" onClick={getBothGames}>
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