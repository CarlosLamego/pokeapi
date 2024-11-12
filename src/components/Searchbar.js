import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Searchbar = (props) => {
    const [search, setSearch] = useState('')
    const {onSearch} = props
    const navigate = useNavigate()

    const onChangeHandler = (e) => {
        const value = e.target.value;
        setSearch(value)

        if (value.length === 0) {
            onSearch(undefined)
            navigate('/')
        } else {
            onSearch(value)
        }
    }
    
    const onButtonClickHandler = () => {
        onSearch(search.trim() === "")
        if (search.length === 0) {
            navigate('/')
        }
    }

    const onKeyDownHandler = (e) => {
        if (e.key === 'Enter') { // Verifica se a tecla pressionada é Enter
            onSearch(search);
        }
    };

    return (
        <div className="searchbar-container">
            <div className="searchbar">
                <input placeholder="Buscar pokemon" value={search} onChange={onChangeHandler} onKeyDown={onKeyDownHandler}/>
            </div>
            <div className="searchbar-btn">
                <button onClick={onButtonClickHandler}> Buscar </button>
            </div>
        </div>
    )
}

export default Searchbar