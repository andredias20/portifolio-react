import { FileText, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";


import { HeroActionButton } from "@/components/HeroActions/HeroActionButton.tsx";
import "@/components/HeroActions/HeroActions.css";

const heroActions = [
    { label: "Github", icon: FaGithub, href: "https://www.github.com/andredias20" },
    { label: "LinkedIn", icon: FaLinkedin, href: "https://www.linkedin.com/in/andredias20" },
    { label: "Currículo", icon:  FileText, href: "https://www.andredcdias.com.br/curriculo" },
    { label: "Contato", icon: Mail, href: "malito:andre.c.dias2000@gmail.com" },
];

export function HeroActions() {
    return (
        <div className="hero-actions">
            {heroActions.map((action) => (
                <HeroActionButton
                    key={action.label}
                    label={action.label}
                    icon={action.icon}
                    href={action.href}
                />
            ))}
        </div>
    );
}
