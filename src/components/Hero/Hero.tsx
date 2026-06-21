import profilePicture from "@/assets/profile.jpeg";
import "@/components/Hero/Hero.css";

import { HeroActions } from "@/components/HeroActions/HeroActions.tsx";

export default function Hero() {
    return (
        <div className="hero-profile-container">
            <div className="profile-container">
                <div className="profile-picture-container">
                    <img
                        className="profile-picture"
                        src={profilePicture}
                        alt="Foto de perfil de André Dias"
                    />
                </div>
                <div className="profile-description-container">
                    <h1 className="profile-name">André Dias</h1>
                    <h2 className="profile-description">
                        Desenvolvedor Full Stack / Backend
                    </h2>
                    <hr className="profile-divider" />
                    <p className={ "profile-quote"}>
                        "Qualquer um pode escrever um código que o computador entenda. Bons programadores escrevem códigos que os humanos entendam."
                        Martin Fowler
                    </p>
                </div>
            </div>
            <HeroActions />
        </div>
    );
}
