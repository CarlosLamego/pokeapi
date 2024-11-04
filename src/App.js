import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';
import Pokedex from './components/Pokedex';
import { getPokemons, getPokemonData, searchPokemon } from './Api';
import { useEffect, useState } from 'react';
import { setSelectionRange } from '@testing-library/user-event/dist/utils';


function App() {

  const [pokemons, setPokemons] = useState([])
  const [page, setPage] = useState([])
  const [totalPages, setTotalPages] = useState([])
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState([false])


  const itensPerPage = 10

  const fetchPokemons = async () => {
    try {
      setLoading (true)
      setNotFound(false)
      const data = await getPokemons(itensPerPage, itensPerPage * page)
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url)
      })
      
      const results = await Promise.all(promises)
      setPokemons(results)
      setLoading(false)
      setTotalPages(Math.ceil(data.count / itensPerPage))
    } catch (error) {
      console.log("error: " , error)
    }
  }

  useEffect(() => {
    fetchPokemons()
  }, [page])

  const onSearchHandler = async (pokemon) => {
    if (!pokemon) {
      return fetchPokemons ()
    }
    setLoading(true)
    setNotFound(false)

    const result = await searchPokemon(pokemon)
    if (!result) {
      setNotFound(true)
    } else {
      setPokemons([result])
      setPage(0)
      setTotalPages(1)
    }
    setLoading(false)
  }

  return (
    <div>
      <Navbar />
      <Searchbar onSearch={onSearchHandler}/>
      {notFound ? (
        <div class-name='not-found-text'> Pokemon não encontrado </div>
      ): (
        <Pokedex 
        pokemons ={pokemons}
        page ={page}
        setPage={setPage}
        totalPages={totalPages}
        />  )}
    </div>
  );
}

export default App;
