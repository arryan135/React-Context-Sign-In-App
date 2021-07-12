import React, {createContext} from "react";
import useToggleState from "../hooks/useToggleState.js"

const ThemeContext = createContext();

function ThemeProvider(props){
    const [isDarkMode, toggle] = useToggleState(false);
    return (
        <ThemeContext.Provider value = {{isDarkMode: isDarkMode, toggleTheme: toggle}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export {ThemeContext, ThemeProvider};