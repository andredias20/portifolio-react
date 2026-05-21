import {Links} from "@/components/Header/Links.tsx";
import {Logo} from "@/components/Header/Logo.tsx";
import {ToggleNight} from "@/components/Header/ToggleNight.tsx";

export default function Header() {
    return <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
        <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4">
            <Logo/>
            <Links/>
            <ToggleNight/>
        </nav>
    </header>;
}
