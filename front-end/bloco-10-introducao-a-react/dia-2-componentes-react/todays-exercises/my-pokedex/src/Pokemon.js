import React from 'react';
import './App.css';
// {
//   id: 25,
//   name: 'Pikachu',
//   type: 'Electric',
//   averageWeight: {
//     value: 6.0,
//     measurementUnit: 'kg',
//   },
//   image: 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png',
//   moreInfo: 'https://bulbapedia.bulbagarden.net/wiki/Pikachu_(Pok%C3%A9mon)',
// }

class Pokemon extends React.Component {
  render() {
    const {
      id,
      name,
      type,
      averageWeight: { value: weight, measurementUnit: unit },
      image: img,
    } = this.props.data;
    return (
      <li key={id} className='card'>
        <div>
          <p>Name: {name}</p>
          <p>Type: {type}</p>
          <p>Average Weight: {weight + ' ' + unit}</p>
        </div>
        <img src={img} alt={'Image of ' + name} />
      </li>
    );
  }
}

export default Pokemon;
