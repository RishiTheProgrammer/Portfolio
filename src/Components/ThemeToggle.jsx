import { useEffect, useState } from 'react'

const ThemeToggle = () => {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "dark";
    });

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        document.documentElement.setAttribute("data-bs-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme])

    const toggleTheme = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"))
    }

    return (
    <button className="theme-toggle border-2" onClick={toggleTheme} aria-label='Toggle Theme' title={theme === "dark" ? "Dark Mode" : "Light Mode"}>
        <i className={theme === "dark" ? "bi bi-moon-fill" : "bi bi-sun-fill"}></i>
    </button>
  )
}

export default ThemeToggle