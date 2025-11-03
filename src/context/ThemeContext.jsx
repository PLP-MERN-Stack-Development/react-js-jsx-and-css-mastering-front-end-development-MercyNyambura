import React, { createContext, useContext, useState, useEffect } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'


const ThemeContext = createContext()


export function ThemeProvider({ children }) {
const [stored, setStored] = useLocalStorage('theme', 'light')
const [theme, setTheme] = useState(stored || 'light')


useEffect(() => {
const root = document.documentElement
if (theme === 'dark') root.classList.add('dark')
else root.classList.remove('dark')
setStored(theme)
}, [theme])


function toggleTheme() {
setTheme(t => (t === 'dark' ? 'light' : 'dark'))
}


return (
<ThemeContext.Provider value={{ theme, toggleTheme }}>
{children}
</ThemeContext.Provider>
)
}


export function useTheme() {
return useContext(ThemeContext)
}