import React, { useEffect, useState } from 'react';
import './GameContainer.css';
import Request from '../helpers/request';
import Game from '../components/games/Game';


const GameContainer = ({loggedInUser, setUser, sortByRating, getUser}) => {

    const [games, setGames] = useState([]);
    const [gamesRatings, setGamesRatings] = useState([]);
    const [gameOne, setGameOne] = useState();
    const [gameTwo, setGameTwo] = useState();
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 769);
    const [isPhone, setIsPhone] = useState(window.innerWidth <= 768);
    const [loading, setLoading] = useState(false);
    const [gameTwoWin, setGameTwoWin] = useState(null);

    const ratingsUrl = '/api/gameratings';
    const request = new Request();

    useEffect(() => {

      const gamePromise = request.get('/api/games');
      const gameRatingPromise = request.get('/api/gameratings')

      Promise.all([gamePromise])
        .then((data) => {
          setGames(data[0]);
        })
        .then(getBothGames());

      getGameRatings();

        const handleResize = () => {
          setIsDesktop(window.innerWidth >= 769);
          setIsPhone(window.innerWidth <= 768);
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };

        
    }, [])

    useEffect(() => {
      sortByRating();
    }, [gameOne, gameTwo])
    
    const handleClick = (game) => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 1000);

      handleRatingsPost(gameOne, gameTwo);
      
      if (game.id === gameOne.id) {
        setGameTwoWin(false)
      } else if (game.id === gameTwo.id) {
        setGameTwoWin(true)
      }
      getBothGames();
      getUser();
      getGameRatings();
    }

    const getGameRatings = () => {
      const request = new Request();
      request.get('/api/gameratings')
      .then((data) => {
        setGamesRatings(data);
      })
    }

    const handleRatingsPost = (gameOne, gameTwo) => {

      let gameOneObject = {
        "game_id": gameOne.id,
        "user_id": loggedInUser.id,
        "game": gameOne.slug,
        "user": loggedInUser.name,
        "rating": 1200
      };
      let gameTwoObject = {
        "game_id": gameTwo.id,
        "user_id": loggedInUser.id,
        "game": gameTwo.slug,
        "user": loggedInUser.name,
        "rating": 1200
      };


      if (findGameById(gameOne.id)) {
        const game = gamesRatings.find((gameRating) => 
          (gameRating.id.game_id === gameOne.id && gameRating.id.user_id === loggedInUser.id)
        )

        gameOneObject.rating = game.rating;
      }

      if (findGameById(gameTwo.id)) {
        const game = gamesRatings.find((gameRating) => 
          (gameRating.id.game_id === gameTwo.id && gameRating.id.user_id === loggedInUser.id)
        )

        gameTwoObject.rating = game.rating;
      }

        EloRating(gameOneObject, gameTwoObject, 30, true)
        
      if (!findGameById(gameOne.id)) {
        handlePost(gameOneObject);
      } else {
        handleUpdate(gameOneObject);
      }

      if (!findGameById(gameTwo.id)) {
        handlePost(gameTwoObject);
      } else {
        handleUpdate(gameTwoObject);
      }
        
    }

    const handlePost = (gameRating) => {
      const request = new Request();
      request.post('/api/gameratings', gameRating);
    }

    const handleUpdate = (gameRating) => {
      const request = new Request();
      request.patch('/api/gameratings/update', gameRating);
    }

    const GetRandomIndex = () => {
      return Math.floor(Math.random() * games.length);
    }

    if (!loggedInUser.games) {
      return "Loading....."
    }

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
      }

    return (
      <div className="container">
      <div className="row">
        <div className='gameslist'>
        {isDesktop && (
          <div className="phonegame">
            <h2>Your Top Games</h2>
            <ol>
              {sortByRating()}
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
  {!loading && (
    <button className="btn btn-primary custom-button" onClick={getGameOne}>
      Haven't played
    </button>
  )}
</div>
<div className="col-4">
  {!loading && (
    <button className="btn btn-primary custom-button" onClick={getBothGames}>
      Haven't played either
    </button>
  )}
</div>
<div className="col-4">
  {!loading && (
    <button className="btn btn-primary custom-button" onClick={getGameTwo}>
      Haven't played
    </button>
  )}
</div>
</div>

</div>
        </div>
      </div>
    </div>


  );
}

export default GameContainer;