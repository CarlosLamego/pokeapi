import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Pokedex from "./components/Pokedex";
import { getPokemons, getPokemonData, searchPokemon } from "./Api";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PokemonDetail from "./Pages/Page";
import { ThemeProvider } from "./contexts/theme-context";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(false);
  const [itensPerPage, setItensPerPage] = useState(10);

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      setNotFound(false);
      const data = await getPokemons(itensPerPage, itensPerPage * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });

      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotalPages(Math.ceil(data.count / itensPerPage));
    } catch (error) {
      console.log("error: ", error);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, [page, itensPerPage]);

  const onButtonExpandHandler = async () => {
    setItensPerPage((prevItens) => prevItens + 10); //para adicionarmos mais 10 pokemons
  };

  const onSearchHandler = async (pokemon) => {
    if (!pokemon) {
      setPage(0);
      setItensPerPage(10);
      setNotFound(false);
      return;
    }
    setLoading(true);
    setNotFound(false);

    const result = await searchPokemon(pokemon);
    if (!result || result.detail === "Not Found") {
      setNotFound(true);
      setPokemons([]);
    } else {
      setPokemons([result]);
      // setPage(0);
      // setTotalPages(1);
    }
    setLoading(false);
  };

  return (
    <ThemeProvider>
      <Router>
          <Navbar fetchPokemons={fetchPokemons} />
          <Searchbar onSearch={onSearchHandler} />
          <Routes>
            <Route
              path="/"
              element={
                notFound ? (
                  <div className="not-found-text"> Pokemon não encontrado </div>
                ) : (
                  <Pokedex
                    pokemons={pokemons}
                    loading={loading}
                    page={page}
                    setPage={setPage}
                    totalPages={totalPages}
                    itensPerPage={itensPerPage}
                    setItensPerPage={setItensPerPage}
                    onButtonExpand={onButtonExpandHandler}
                    fetchPokemons={fetchPokemons}
                  />
                )
              }
            />
            <Route path="/pokemon/:id" element={<PokemonDetail />} />
          </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
