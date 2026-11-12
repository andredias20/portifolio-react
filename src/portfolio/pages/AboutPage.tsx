import { CareerSection } from "../CareerSection";
import { LearningSection } from "../LearningSection";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import portrait from "../../assets/profile.jpeg";
import { professionalLinks, type Language } from "../content";
import { heading } from "../PageHeading";
export default function AboutPage({ language }: { language: Language }) {
  const t = (pt: string, en: string) => (language === "pt" ? pt : en);
  return (
    <>
      {heading(
        t("01 / SOBRE MIM", "01 / ABOUT"),
        t("Prazer, André.", "Hey, I’m André."),
        t(
          "Curiosidade como ponto de partida.",
          "Curiosity as a starting point.",
        ),
      )}
      <div className="about-grid">
        <img src={portrait} alt="André Dias" />
        <div className="article-body">
          <h2>
            {t(
              "Desenvolvimento de aplicações e sistemas",
              "Full Stack / Backend",
            )}
          </h2>
          <p>
            {t(
              "Gosto de transformar ideias em software e entender o que acontece por trás da interface. Terminal, servidores e hardware fazem parte desse universo.",
              "I enjoy turning ideas into software and understanding what happens behind the interface. Terminals, servers and hardware are part of that world.",
            )}
          </p>
          <p>
            {t(
              "Fora da tela, encontro outros ritmos na bicicleta, no violão e na academia. Design e experimentos com IA completam essa mistura.",
              "Away from the screen, I find other rhythms through cycling, guitar and the gym. Design and AI experiments complete the mix.",
            )}
          </p>
          <div className="actions">
            {professionalLinks.map(({ label, href }) => (
              <a
                className="text-link"
                href={href}
                key={label}
                target="_blank"
                rel="noopener noreferrer"
              >
                {label}
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            ))}
          </div>
          <Link className="button primary" to="/life">
            {t("Interesses pessoais", "Personal Life Skills")}{" "}
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
      <CareerSection language={language} />
      <LearningSection language={language} />
    </>
  );
}
