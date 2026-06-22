import "@/components/Header/Header.css";
import { HeaderLinks } from "@/components/Header/HeaderLinks.tsx"
import {useState, useEffect} from "react";

type Theme = "light" | "dark";

export default function Header() {
    const [theme, setTheme] = useState<Theme>(() => {
        const savedTheme = localStorage.getItem("theme");
        return savedTheme === "light" || savedTheme === "dark" ? savedTheme : "dark";
    });

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
        localStorage.setItem("theme", theme);
    }, [theme]);

    function toggleTheme() {
        setTheme((currentTheme) =>
            currentTheme === "dark" ? "light" : "dark"
        );
    }

    return <header className="site-header">
        <nav className="site-header-navbar">
            <div className="name-icon-container">
                <div className="text-name-container">
                    <h1 className="text-name">
                        André Dias
                    </h1>
                </div>
            </div>
            <HeaderLinks />
            <div>
                <button
                    className="theme-toggle-button"
                    type="button"
                    onClick={toggleTheme}
                    aria-label={`Trocar para tema ${theme === "dark" ? "claro" : "escuro"}`}
                >
                    {theme === "dark" ? "☀" : "☾"}
                </button>
            </div>
        </nav>
    </header>;
}
