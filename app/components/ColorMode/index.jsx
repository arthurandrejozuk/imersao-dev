import React, { useState } from "react";

export const ColorModeContext = React.createContext({
    mode: "",
    setMode: () => alert(''),
    toggleMode: () => alert('')
});

export function ColorModeProvider({children, initialMode}) {

    const [mode, setMode] = useState(initialMode)

    function toggleMode() {
        if(mode === "dark") setMode("light");
        if(mode === "light") setMode("dark");
    }

    return(
        <ColorModeContext.Provider value={{mode: mode, setMode: setMode, toggleMode: toggleMode}}>
            {children}
        </ColorModeContext.Provider>
    )
}