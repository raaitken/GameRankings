import React, { useState } from 'react';

const GameForm = ({onCreate}) => {

  const [stateGame, setStateGame] = useState({
    name: "",
    slug: "",
    image: "",
    genre: "",
    description: "",
    year: null,
    platform: null
  });

  const handleChange = (event) => {
    let propertyName = event.target.name;
    let copiedGame = {...stateGame};
    copiedGame[propertyName] = event.target.value;
    setStateGame(copiedGame);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(stateGame);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="test"
          placeholder='Name'
          name='name'
          onChange={handleChange}
          value={stateGame.name}
        />
        <input
          type='text'
          placeholder='Slug'
          name='slug'
          onChange={handleChange}
          value={stateGame.slug}
        />
        <input
          type='text'
          placeholder='Image URL'
          name='image'
          onChange={handleChange}
          value={stateGame.image}
        />
        <input 
          type='text'
          placeholder='Genre'
          name='genre'
          onChange={handleChange}
          value={stateGame.genre}
        />
        <input
          type='textarea'
          placeholder='Description'
          name='description'
          onChange={handleChange}
          value={stateGame.description}
        />
        <input 
          type='number'
          placeholder='Release Year'
          name='year'
          onChange={handleChange}
          value={stateGame.year}
        />
        <input
          type='text'
          placeholder='Platform'
          name='platform'
          onChange={handleChange}
          value={stateGame.platform}
        />
        <button type='submit'>Save</button>
      </form>
    </div>
  );
}

export default GameForm;