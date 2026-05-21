import curriculoIcon from "@/assets/document.svg";
import githubIcon from "@/assets/github.svg";
import linkedinIcon from "@/assets/linkedin.svg";
import mailIcon from "@/assets/mail.svg";
import { HeroActionButton } from "@/components/Hero/HeroActionButton.tsx";

const heroActions = [
    { label: "Github", icon: githubIcon, href: "https://www.github.com/andredias20" },
    { label: "LinkedIn", icon: linkedinIcon, href: "https://www.linkedin.com/in/andredias20" },
    { label: "Currículo", icon: curriculoIcon, href: "https://www.andredcdias.com.br/curriculo" },
    { label: "Contato", icon: mailIcon, href: "malito:andre.c.dias2000@gmail.com" },
];

export function HeroActions() {
    return (
        <div id="lower-hero" className="mt-6 flex w-full items-center gap-4">
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
