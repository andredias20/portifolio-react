import "@/components/Header/HeaderLinks.css";

const activeHref = "#home";

const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Projetos", href: "#projects" },
    { label: "Experiência", href: "#experience" },
    { label: "Lab", href: "#lab" },
    { label: "Contato", href: "#contact" },
];

export function HeaderLinks() {
    return <div className="header-links_box">
        {navLinks.map((link) => {
            const isActive = link.href === activeHref;

            return (
                <a
                    key={link.href}
                    href={link.href}
                    className={
                        isActive
                            ? "link-button-active"
                            : "link-button"
                    }
                >
                    {link.label}
                </a>
            );
        })}
    </div>;
}
