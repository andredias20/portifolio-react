import "@/components/HeroActions/HeroActionButton.css";

interface HeroActionButtonProps {
    label: string;
    icon: string;
    href: string;
}

export function HeroActionButton({ label, icon, href }: HeroActionButtonProps) {
    return (
        <button
            className="hero-actions-button"
            type="button"
            onClick={() => window.open(href, "Redirect")}
        >
            <span className="hero-actions-button-icon">
                <img
                    className="hero-actions-button-image"
                    src={icon}
                    alt=""
                    aria-hidden="true"
                />
            </span>
            <span>{label}</span>
        </button>
    );
}
