import React, { Fragment } from 'react';

const Game = ({ game, handleClick }) => {
  if (!game) {
    return "Loading..."
  }

  return (
    <Fragment>
      <div className="col-6">
        <div className="game-item">
          <h3 className="game-name">{game.name}</h3>
          <img src={game.background_image} alt={game.name} className="game-image" onClick={() => {handleClick(game)}}/>
          <div className="game-info"></div>
        </div>
      </div>
    </Fragment>  
  );
}

export default Game;
