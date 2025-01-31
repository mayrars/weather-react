import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext()
const THEME_KEY = 'theme'

function ThemeProvider({ children }) {
    const [dark, setDark] = useState(true)

    useEffect(()=>{
        const savedTheme = localStorage.getItem(THEME_KEY)
        if (savedTheme!==null) {
            setDark(savedTheme)
            return
        }
        const isSystemThemeDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        setDark(isSystemThemeDark===true)
        console.log(isSystemThemeDark)
    },[])
    return <ThemeContext.Provider value={{}}>
        {children}
    </ThemeContext.Provider>
}

export {ThemeProvider}

export default ThemeContext