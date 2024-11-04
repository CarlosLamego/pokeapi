import React from "react";

const Navbar = () => {
    const logoIcon = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
    return (
        <nav>
            <img src={logoIcon} alt={'logo icon'}/>
            <button className="theme-btn"> Mudar o Tema </button>
            <button className="favorite-btn"> 💖 </button>
        </nav>
    )
}
export default Navbar