import React from "react";

const Expand = (props) => {
    const { onButtonExpand } = props
    return (
        <div className="pokedex-bottom">
            <button className="pokedex-bottom-btn" onClick={onButtonExpand}>Mostrar mais 10 pokemons</button>
        </div>
    )
}

export default Expand