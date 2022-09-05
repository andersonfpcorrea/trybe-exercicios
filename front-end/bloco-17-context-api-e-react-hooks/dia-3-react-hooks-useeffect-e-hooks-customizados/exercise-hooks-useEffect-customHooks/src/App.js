import React, { useState } from 'react';
import FavoriteAnimal from './FavoriteAnimal';

function App() {
  // 🐨 inclua um useState para o 'animal'
  const [name, setName] = useState('');
  const [animal, setAnimal] = useState('');

  const onAnimalChange = ({ target: { value } }) => {
    setAnimal(value);
  };

  return (
    <form>
      <div>
        <label htmlFor="name">
          Name:
          <input
            id="name"
            value={ name }
            onChange={ (event) => setName(event.target.value) }
          />
        </label>
      </div>
      {/* 🐨 passe o animal e onAnimalChange como props aqui */}
      <FavoriteAnimal animal={ animal } onAnimalChange={ onAnimalChange } />
      {/* 🐨 Altere o codigo abaixo para
      <div>{`Hey ${name}, your favorite animal is: ${animal}!`}</div> */}
      <div>{`Hey ${name}, your favorite animal is: ${animal}!`}</div>
    </form>
  );
}

export default App;
