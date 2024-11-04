import React from "react";
import Pokemon from "./Pokemon";

const Pokedex = (props) => {
    const { pokemons } = props;
    return (
        <div className="pokedex">
            <h1>Pokedex</h1>
            <div className="pokemon-grid"> 
                { pokemons.map((pokemon, index) => {
                    return (
                        <>
                            <Pokemon key={index} pokemon={pokemon} />
                            
                        </>
                    )
                })}
            </div>
        </div>

    )
    
}

export default Pokedex