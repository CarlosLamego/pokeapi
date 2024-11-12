import React, { useContext } from "react";
import { ThemeTogglerButton } from "./Theme-toggler-button";
import { ThemeContext } from "../contexts/theme-context";

const Navbar = (props) => {
    const { theme } = useContext(ThemeContext);
    const {fetchPokemons} = props;

    const onButtonVoltar = () => {
        fetchPokemons();
    };

    const logoIcon = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
    return (
        <nav style={{ backgroundColor: theme.background, color: theme.color}}>  
                <img src={logoIcon} alt={'logo icon'} onClick={onButtonVoltar} style={{cursor: "pointer"}} />
            <ThemeTogglerButton />
        </nav>
    )
}
export default Navbar
