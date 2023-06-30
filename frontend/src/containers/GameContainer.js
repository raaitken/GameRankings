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
    const [giantBombGameOne, setGiantBombGameOne] = useState();
    const [giantBombGameTwo, setGiantBombGameTwo] = useState();

    
    const request = new Request();
    const urlGame = "/api/games";
    const urlRating = "/api/gameratings";

    useEffect(() => {

      const gamePromise = request.get('/api/games');

      Promise.all([gamePromise])
      .then((data) => {
        setGames(data[0]);
      })

      const gameUserPromise = request.get('/api/gameratings');

      Promise.all([gameUserPromise])
      .then((data) => {
        setGameUsers();
      })

        // getGameOne();
        // getGameTwo();
        // getGiantBombGameOne();
        // getGiantBombGameTwo();
        getGameUsers();

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


    const handleClick = () => {
      const newGameOne = {
        "id": giantBombGameOne.id,
        "name": giantBombGameOne.name,
        // "slug": giantBombGameOne.slug,
        "image": giantBombGameOne.icon_url
        // "genre": gameOne.genres[0].name
      }

      const newGameTwo = {
        "id": giantBombGameTwo.id,
        "name": giantBombGameTwo.name,
        // "slug": giantBombGameTwo.slug,
        "image": giantBombGameTwo.icon_url
        // "genre": gameTwo.genres[0].name
      }

      const gameRatingOne = {
        "game_id": giantBombGameOne.id,
        "user_id": loggedInUser.id,
        "rating": 1200
      }

      const gameRatingTwo = {
        "game_id": giantBombGameTwo,
        "user_id": loggedInUser,
        "rating": 1200
      }

      console.log(gameRatingOne);
      console.log(gameRatingTwo);

      if (!findGameBySlug(gameOne.slug)) {
        request.post(urlGame, newGameOne);
        request.post(urlRating, gameRatingOne);
      }

      if(!findGameBySlug(gameTwo.slug)) {
        request.post(urlGame, newGameTwo);
        request.post(urlRating, gameRatingTwo);
      }
      // getGameOne();
      // getGameTwo();
    }

    const randomInt = (min, max) => {
      return Math.floor(Math.random() * max) + min;
    }

    const random100Int = () => {
      return (Math.floor(Math.random() * 84)) * 100;
    }

    // const getGiantBombGameOne = () => {
    //   fetch("https://www.giantbomb.com/api/games/?api_key=99bb77b092abb16f3a3b310a902f39e3c6e8ee2d&format=json&offset=" + random100Int())
    //   .then((response) => response.json())
    //   .then((data) => setGiantBombGameOne(data.results[randomInt(0, 99)]))
    // }

    // const getGiantBombGameTwo = () => {
    //   fetch("https://www.giantbomb.com/api/games/?api_key=99bb77b092abb16f3a3b310a902f39e3c6e8ee2d&format=json&offset=" + random100Int())
    //   .then((response) => response.json())
    //   .then((data) => setGiantBombGameTwo(data.results[randomInt(0, 99)]))
    // }

    const getGameUsers = () => {
      const request = new Request()
      request.get("/api/gameratings")
      .then((data) => {
        setGameUsers(data)
      })
    }

    if (!gameUsers) {
      return "Loading....."
    }

    const gameRatings = loggedInUser.games.sort((gameA, gameB) => gameB.gameUsers[0].rating - gameA.gameUsers[0].rating);

    const gameRatingsNodes = gameRatings.map((gameRating, index) => {
      return <li>{gameRating.name}</li>
    })

    // const getGameOne = () => {

    //     fetch("https://api.rawg.io/api/games?page=" + randomInt(1, 500) + "&page_size=40&key=" + process.env.REACT_APP_API_KEY)
    //     .then((response) => response.json())
    //     .then((data) => setGameOne(data.results[randomInt(0, 39)]))
    // }

    // const getGameTwo = () => {

    //     fetch("https://api.rawg.io/api/games?page=" + randomInt(1, 500) + "&page_size=40&key=" + process.env.REACT_APP_API_KEY)
    //     .then((response) => response.json())
    //     .then((data) => setGameTwo(data.results[randomInt(0, 39)]))
    // }

    // const getBothGames = () => {
    //   getGiantBombGameOne();
    //   getGiantBombGameTwo();
    // }

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
              {gameRatingsNodes}
            </ol>
          </div>
          
        )}
        </div>
        <div className='pics'>

        <div className={isDesktop ? "col-lg-8" : "col-12"}>
          <div className="row">
            <Game game={giantBombGameOne} handleClick={handleClick} />
            <Game game={giantBombGameTwo} handleClick={handleClick} />
          </div>

          <div className="row">
          <div className="col-4">
  <button className="btn btn-primary custom-button">
    Haven't played
  </button>
</div>
<div className="col-4">
  <button className="btn btn-primary custom-button">
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