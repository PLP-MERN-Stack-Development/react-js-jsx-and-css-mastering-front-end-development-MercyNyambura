import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'
import Button from './Button'


export default function Navbar() {
const { theme, toggleTheme } = useTheme()


return (
<nav className="w-full border-b dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
<div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
<div className="flex items-center gap-4">
<Link to="/" className="font-bold text-lg">TaskApp</Link>
</div>
<div className="flex items-center gap-3">
<Link to="/api" className="text-sm">API Data</Link>
<Button variant="secondary" onClick={toggleTheme}>{theme === 'dark' ? 'Light' : 'Dark'}</Button>
</div>
</div>
</nav>
)
}