import React, { Fragment } from 'react';

const Game = ({ game, handleClick }) => {

    if (!game) {
        return "Loading..."
    }

    return (
        <Fragment>
            <div className="col-6">
              <div className="game-item">
                <img src={game.background_image} alt={game.name} className="game-image" onClick={handleClick}/>
              </div>
            </div>
        </Fragment>
    );
}
 
export default Game;