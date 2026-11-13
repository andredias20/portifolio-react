import { CareerSection } from "../CareerSection";
import { LearningSection } from "../LearningSection";
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
              "Várias das ideias que levei para as empresas e que deram mais certo começaram com uma pesquisa no meu tempo livre. Gosto de investigar uma possibilidade, entender como funciona e aplicar quando ela resolve um problema real.",
              "Several of the ideas I brought to companies that worked best started with research in my free time. I like investigating a possibility, understanding how it works and applying it when it solves a real problem.",
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
        </div>
      </div>
      <CareerSection language={language} />
      <LearningSection language={language} />
    </>
  );
}
