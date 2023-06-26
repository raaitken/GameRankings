import React, { useEffect, useState } from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import Request from '../helpers/request';
import GameDetail from '../components/games/GameDetail';


const GameContainer = () => {

    const [games, setGames] = useState([]);
    const [gameOne, setGameOne] = useState();
    const [gameTwo, setGameTwo] = useState();

    useEffect(() => {
      const request = new Request();

      const gamePromise = request.get('/api/games');

      Promise.all([gamePromise])
        .then((data) => {
          setGames(data[0]);
        })

        setGamesFunc();
    }, [])

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

    const setGamesFunc = () => {
      setGameOne(games[GetRandomIndex()]);
      setGameTwo(games[GetRandomIndex()]);
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
        <Routes>
            <Route path='/:slug' element={<GameDetailWrapper />} />
        </Routes>
    );
}

export default GameContainer;