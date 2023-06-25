import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Game = ({ game }) => {

    if (!game) {
        return "Loading..."
    }

    const url = "/games/" + game.id;
    return (
        <Fragment>
            <p>
                <Link to={url}>
                    {game.name}
                </Link>
            </p>
            <p>Description: {game.description}</p>
            <p>Genre: {game.genre}</p>
            <p>Release Year: {game.yearOfRelease}</p>
            <p>Platforms: </p>
        </Fragment>
    );
}
 
export default Game;