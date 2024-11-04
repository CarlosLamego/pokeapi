import './App.css';
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';
import Pokedex from './components/Pokedex';
import { getPokemons, getPokemonsData } from './Api';
import { useEffect, useState } from 'react';


function App() {

  const [pokemons, setPokemons] = useState([])

  const fetchPokemons = async () => {
    const data = await getPokemons()
    const promises = data.results.map(async (pokemon) => {
      return await getPokemonsData(pokemon.url)
    })

    const results = await Promise.all(promises)
    setPokemons(results)
  }

  useEffect(() => {
    fetchPokemons()
  }, [])

  return (
    <>
      <Navbar />
      <Searchbar />
      <Pokedex 
        pokemons ={pokemons}
      />
    </>
  );
}

export default App;
