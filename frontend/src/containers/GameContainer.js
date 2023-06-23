import React, { useEffect, useState } from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import Request from '../helpers/request';
import GameDetail from '../components/games/GameDetail';


const GameContainer = () => {

    const [games, setGames] = useState([]);

    useEffect(() => {
      const request = new Request();

      const gamePromise = request.get('/api/games');

      Promise.all([gamePromise])
        .then((data) => {
          setGames(data[0]);
        })
    }, [])

    const findGameById = (id) => {
      return games.find((game) => {
        return game.id === parseInt(id);
      })
    };

    const GameDetailWrapper = () => {
      const { id } = useParams();
      let foundGame = findGameById(id);

      return <GameDetail game={foundGame} />;
    }

    return (
        <Routes>
            <Route path='/:id' element={<GameDetailWrapper />} />
        </Routes>
    );
}
 
export default GameContainer;