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
    const [gameRating, setGameRating] = useState({
      "game": null,
      "user": null,
      "rating": 0
    });
    const [gameRatingTwo, setGameRatingTwo] = useState();
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 769);
    const [isPhone, setIsPhone] = useState(window.innerWidth <= 768);
    const [loading, setLoading] = useState(false);

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
    }, [])

    const handleClick = () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
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
        "game": gameOne,
        "user": loggedInUser,
        "rating": 1200
      }

      const gameRatingTwo = {
        "game": gameTwo,
        "user": loggedInUser,
        "rating": 1200
      }

      handleRatingsPost(gameOne);
      handleRatingsPost(gameTwo);
      
      getBothGames();
    }

    const handleRatingsPost = (game) => {
      if (!findGameById(game.id)) {
        setGameRating({
          "game": game.slug,
          "user": loggedInUser,
          "rating": 1200
        })
        request.post(ratingsUrl, gameRating);
      }
    }

    const GetRandomIndex = () => {
      return Math.floor(Math.random() * games.length);
    }

    if (!gameUsers) {
      return "Loading....."
    }

    const gameRatings = loggedInUser.games.sort((gameA, gameB) => gameB.gameUsers[0].rating - gameA.gameUsers[0].rating);

    const gameRatingsNodes = gameRatings.map((gameRating, index) => {
      return <li key={index}>{gameRating.name}</li>
    })

    // const getGameOne = () => {
    //   setGameOne(games[GetRandomIndex()]);
    // }

    
    const getBothGames = () => {
      
      
      while (true) {
        const newGameOne = games[GetRandomIndex()];
        const newGameTwo = games[GetRandomIndex()];
        console.log("Game 1: ", newGameOne);
        console.log("Game 2: ", newGameTwo);
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

    // const GameDetailWrapper = () => {
    //   const { slug } = useParams();
    //   let foundGame = findGameBySlug(slug);

    //   return <GameDetail game={foundGame} />;
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

  <button className="btn btn-primary custom-button">
    Haven't played
  </button>
</div>
<div className="col-4">
  <button className="btn btn-primary custom-button" onClick={getBothGames}>
    Haven't played either
  </button>
</div>
<div className="col-4">
  <button className="btn btn-primary custom-button">
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