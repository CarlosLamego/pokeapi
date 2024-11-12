import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getPokemonData } from "../Api";

const PokemonDetail = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  // const {pokemon} = props

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const data = await getPokemonData(
          `https://pokeapi.co/api/v2/pokemon/${id}`
        );
        setPokemon(data);
        setLoading(false);
      } catch (error) {
        console.log("error: ", error);
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [id]);

  if (loading) return <div>Carregando...</div>;
  if (!pokemon) return <div>Pokemon não encontrado...</div>;

  return (
    <>
      <div className="page-unica">
        <div className="parte-a">
          <h1>{pokemon.name}</h1>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
        <div className="parte-b">
          <div>
            <strong>Tipo: </strong>{" "}
            {pokemon.types.map((type) => type.type.name).join(", ")}
          </div>
          <div>
            <strong>Habilidades:</strong>{" "}
            {pokemon.abilities
              .map((ability) => ability.ability.name)
              .join(", ")}
          </div>
          <div>
            <strong>Golpes: </strong>
            {pokemon.moves.map((move) => move.move.name).join(", ")}
          </div>
        </div>
      </div>
      <div className="btn-home">
        <Link to='/'>Voltar ao início</Link>
      </div>
    </>
  );
};

export default PokemonDetail;
