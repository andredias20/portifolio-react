import { MusicSection } from "../MusicSection";
import type { Language } from "../content";
import { heading } from "../PageHeading";
import { personalInterests } from "../interests";

export default function LifePage({ language }: { language: Language }) {
  const t = (pt: string, en: string) => (language === "pt" ? pt : en);
  return (
    <>
      {heading(
        t("05 / INTERESSES PESSOAIS", "05 / PERSONAL LIFE SKILLS"),
        t("O André fora do trabalho.", "André outside work."),
        t(
          "Curiosidade não fica só no expediente. Aqui cabem meus interesses, experimentos e outras formas de aprender.",
          "Curiosity doesn’t stop after work. Here’s room for my interests, experiments and other ways of learning.",
        ),
      )}
      <nav
        className="interest-navigation"
        aria-label={t("Interesses pessoais", "Personal interests")}
      >
        <a href="#music">{t("Música", "Music")}</a>
        {personalInterests.map((interest) => (
          <a key={interest.id} href={`#${interest.id}`}>
            {interest.title[language]}
          </a>
        ))}
      </nav>
      <MusicSection language={language} />
      <div className="personal-stories">
        {personalInterests.map((interest, index) => (
          <section
            id={interest.id}
            className="personal-story"
            key={interest.id}
          >
            <span className="story-number">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <h2>{interest.title[language]}</h2>
              {interest.paragraphs.map((paragraph, paragraphIndex) => (
                <p key={paragraphIndex}>{paragraph[language]}</p>
              ))}
              {interest.tools && (
                <div className="tags">
                  {interest.tools.map((tool) => (
                    <span key={typeof tool === "string" ? tool : tool.en}>
                      {typeof tool === "string" ? tool : tool[language]}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
