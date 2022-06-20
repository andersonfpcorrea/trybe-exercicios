import './App.css';
import pokemons from './data';
// import Pokemon from './Pokemon';
import Pokedex from './Pokedex';

function App() {
  // return <Pokemon data={pokemons[0]} />;
  return <Pokedex data={pokemons} />;
}

export default App;
