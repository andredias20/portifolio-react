interface HeroActionButtonProps {
    label: string;
    icon: string;
    href: string;
}

export function HeroActionButton({ label, icon, href }: HeroActionButtonProps) {
    return (
        <button
            className="group inline-flex h-12 items-center gap-3 rounded-lg border border-sky-400/40 bg-slate-900/80 px-5 font-semibold text-slate-50 shadow-lg shadow-sky-950/40 transition duration-200 hover:-translate-y-0.5 hover:border-sky-300 hover:bg-sky-400 hover:text-slate-950 hover:shadow-sky-500/25 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-slate-950 active:translate-y-0"
            type="button" onClick={() => window.open(href, "Redirect")}
        >
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-800 transition duration-200 group-hover:bg-slate-950">
                <img className="h-5 w-5" src={icon} alt="" aria-hidden="true" />
            </span>
            <span>{label}</span>
        </button>
    );
}
