import React ,{ createContext, useState } from 'react'

export const themes = { 
    light: {
        color: '#000000',
        background: '#eeeeee',
        //tentativa de mudança no card
        cardColor: '#000000',       // Cor do card no tema claro
        cardBackground: '#f2f2f2',  // Fundo do card no tema claro
    },
    dark: {
        color: '#ffffff',
        background: '#330000',
        // tentativa de mudança no card
        cardColor: '#dddddd',       // Cor do card no tema escuro
        cardBackground: '#333333',  // Fundo do card no tema escuro
    }
}

export const ThemeContext = createContext();

export const ThemeProvider = (props) => {

    const [ theme, setTheme ] = useState(themes.light)

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}