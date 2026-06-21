import "@/components/Header/Header.css";
import { HeaderLinks } from "@/components/Header/HeaderLinks.tsx"

export default function Header() {
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
                <button className="theme-toggle-button">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                    </svg>
                </button>
            </div>
        </nav>
    </header>;
}
