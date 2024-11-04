export const searchPokemon = async (pokemon) => {
    try {
        let url = `https://pokeapi.co/api/v2/${pokemon}`
        const response = await
        fetch (url)
        return await response.json()
    } catch (error) {
        console.log("Error no searchPokemon.js", error)
    }
}

export const getPokemons = async (limit = 10, offset = 0) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset${offset}`
        const response = await
        fetch (url)
        return await response.json()
    } catch (error) {
        console.log("Error no getPokemon.js", error)
    }
}

export const getPokemonsData = async (url) => {
    try {
        const response = await fetch(url)
        return await response.json()
    } catch (error) {
        console.log("Error no getPokemonData.js", error)
    }
}