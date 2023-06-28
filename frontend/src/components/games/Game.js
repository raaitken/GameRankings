import React, { Fragment } from 'react';

const Game = ({ game }) => {

    if (!game) {
        return "Loading..."
    }

    return (
        <Fragment>
            <div className="col-6">
              <div className="game-item">
                <img src={game.background_image} alt={game.name} className="game-image" />
              </div>
            </div>
        </Fragment>
    );
}
 
export default Game;