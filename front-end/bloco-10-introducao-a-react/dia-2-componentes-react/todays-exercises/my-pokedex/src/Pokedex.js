import React from 'react';

class Pokedex extends React.Component {
  render() {
    const pokemons = this.props.data;
    return pokemons.map((el) => (
      <li key={el.id} className='card'>
        <div>
          <p>Name: {el.name}</p>
          <p>Type: {el.type}</p>
          <p>
            Average Weight:{' '}
            {el.averageWeight.value + ' ' + el.averageWeight.measurementUnit}
          </p>
        </div>
        <img src={el.image} alt={'Image of ' + el.name} />
      </li>
    ));
  }
}

export default Pokedex;
