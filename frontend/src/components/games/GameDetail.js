import React from 'react';
import Game from './Game';

const GameDetail = ({ game }) => {

    if (game) {

        return (
            <div>
                <Game game={game} />
            </div>
        );
    }

    return (
        <p>Loading......</p>
    )
}
 
export default GameDetail;