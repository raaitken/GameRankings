import React, { useEffect, useState } from 'react';
import { Route, Routes, useParams } from 'react-router-dom';

import Request from '../helpers/request';
import GameDetail from '../components/games/GameDetail';

const Ranking = ({loggedInUser, sortByRating}) => {
  // if (!loggedInUser.games) {
  //   return "Loading....."
  // }
  // const gameRatings = loggedInUser.games.sort((gameA, gameB) => gameB.gameUsers[0].rating - gameA.gameUsers[0].rating);

  // const gameRatingsNodes = gameRatings.map((gameRating, index) => {
  //   return <li key={index}>{gameRating.name}</li>
  // })

  return (
      <div className='leaderboard'>
        <h2 className='leaderboard-title'>Your Top Games</h2>
        <ol className='leaderboard-list'>
          {sortByRating()}
        </ol>
      </div>
  )}


export default Ranking;
      

    