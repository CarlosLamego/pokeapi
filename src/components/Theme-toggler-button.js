import React, { useContext } from "react"
import { ThemeContext, themes } from "../contexts/theme-context"

export const ThemeTogglerButton = () => {

    const { theme, setTheme } = useContext(ThemeContext)

    const handleTheme = () => {
        setTheme (theme === themes.light ? themes.dark : themes.light)
    }

    return (
        <div>

            <button onClick={handleTheme} style={{cursor: 'pointer'}}> Alternar o tema</button>
        </div>
    )
}