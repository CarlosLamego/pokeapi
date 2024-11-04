import React from "react";

const Searchbar = () => {
    return (
        <div className="searchbar-container">
            <div className="searchbar">
                <input placeholder="Buscar pokemon"/>
            </div>
            <div className="searchbar-btn">
                <button className="" >Buscar</button>
            </div>
        </div>
    )
}

export default Searchbar