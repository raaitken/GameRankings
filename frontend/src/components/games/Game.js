import React, { Fragment } from 'react';

const Game = ({ game, handleClick }) => {

    if (!game) {
        return "Loading..."
    }

    return (
        <Fragment>
            <div className="col-6">
              <div className="game-item">
                <img src={game.image.screen_large_url} alt={game.name} className="game-image" onClick={() => {handleClick(game)}}/>
                <p>{game.name}</p>
              </div>
            </div>
        </Fragment>
    );
}
 
export default Game;