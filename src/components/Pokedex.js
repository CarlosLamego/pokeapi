import React from "react";
import Pokemon from "./Pokemon";
import Pagination from "./Pagination";
import Expand from "./Expand";
import { useContext } from "react";
import { ThemeContext } from "../contexts/theme-context";

const Pokedex = (props) => {
  const {
    loading,
    pokemons,
    page,
    setPage,
    totalPages,
    itensPerPage,
    setItensPerPage,
    fetchPokemons,
  } = props;

  const { theme } = useContext(ThemeContext);

  const onLeftClickHandler = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };
  const onRightClickHandler = () => {
    if (page + 1 !== totalPages) {
      setPage(page + 1);
    }
  };

  const onButtonExpandHandler = () => {
    setItensPerPage(itensPerPage + 10);
  };

  const onButtonVoltar = () => {
    fetchPokemons();
  };

  return (
    <div className="pokedex-container" style={{ backgroundColor: theme.background, color: theme.color}}>
      <div className="pokedex-header">
        <h1>Pokedex</h1>
        <Pagination
          page={page + 1}
          totalPages={totalPages}
          onLeftClick={onLeftClickHandler}
          onRightClick={onRightClickHandler}
        />
      </div>
      {loading ? (
        <div>Carregando a página</div>
      ) : (
        <div className="pokedex-grid">
          {pokemons.map((pokemon, index) => {
            return (
              <>
                <Pokemon key={index} pokemon={pokemon} />
              </>
            );
          })}
        </div>
      )}
      <div className="pokedex-bottom">
        <div className="pokedex-expand">
          <Expand onButtonExpand={onButtonExpandHandler} />
        </div>
        <div className="button-to-begginig">
          <button className="Voltar" onClick={onButtonVoltar}>
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pokedex;
