import "@/components/HeroActions/HeroActionButton.css";


interface HeroActionButtonProps {
    label: string;
    icon: React.ComponentType<{ className?: string }>;
    href: string;
}

export function HeroActionButton({ label, href, icon: Icon }: HeroActionButtonProps) {
    return (
    <button
        className="hero-actions-button" type="button"
        onClick={() => window.open(href, "Redirect")}
    >
      <span className="hero-actions-button-icon">
        <Icon className="hero-actions-button-image" aria-hidden="true" />
      </span>
        <span>{label}</span>
    </button>
    );
}
