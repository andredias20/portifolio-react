const activeHref = "#home";

const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Projetos", href: "#projects" },
    { label: "Experiência", href: "#experience" },
    { label: "Lab", href: "#lab" },
    { label: "Contato", href: "#contact" },
];

export function Links() {
    return (
        <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => {
                const isActive = link.href === activeHref;

                return (
                    <a
                        key={link.href}
                        href={link.href}
                        className={
                            isActive
                                ? "border-b-2 border-sky-400 text-sky-400"
                                : "text-slate-300 hover:text-sky-400"
                        }
                    >
                        {link.label}
                    </a>
                );
            })}
        </div>
    );
}
