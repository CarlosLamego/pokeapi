import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../contexts/theme-context";

const Pokemon = (props) => {
  const { pokemon } = props;
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);

  const handleClick = () => {
    navigate(`/pokemon/${pokemon.id}`);
  };

  return (
    <div
      className="pokemon-card"
      onClick={handleClick}
      style={{
        cursor: "pointer",
        color: theme.cardColor,
        backgroundColor: theme.cardBackground,
      }}
    >
      <div className="pokemon-image-container">
        <img
          alt={pokemon.name}
          src={pokemon.sprites.front_default}
          className="pokemon-image"
        />
      </div>
      <div className="card-body">
        <div className="card-top">
          <h3>{pokemon.name}</h3>
          <div>#{pokemon.id}</div>
        </div>
        <div className="card-bottom">
          <div className="card-bottom-data">
            <div className="pokemon-type">
              {pokemon.types.map((type, index) => {
                return (
                  <div key={index} className="pokemon-type-text">
                    ⭐{type.type.name}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
