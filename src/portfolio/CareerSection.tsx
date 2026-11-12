import type { Language } from "./content";
import { experiences } from "./career";

function formatMonth(value: string, language: Language) {
  const [year, month] = value.split("-").map(Number);
  return new Intl.DateTimeFormat(language === "pt" ? "pt-BR" : "en", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(year, month - 1)));
}

export function CareerSection({
  language,
  compact = false,
}: {
  language: Language;
  compact?: boolean;
}) {
  const t = (pt: string, en: string) => (language === "pt" ? pt : en);
  return (
    <section
      className="section career-section"
      id="experience"
      aria-labelledby="experience-title"
    >
      <span className="eyebrow">{t("TRAJETÓRIA", "MY JOURNEY")}</span>
      <h2 id="experience-title">
        {t("Onde aprendi. O que construí.", "Where I learned. What I built.")}
      </h2>
      <p className="section-intro">
        {t(
          "Comecei perto de quem usa o software, no suporte. Passei pela infraestrutura, pelas integrações e pelo desenvolvimento. Cada etapa mudou minha forma de resolver problemas.",
          "I started close to the people using the software, in support. I moved through infrastructure, integrations and development. Each step changed how I solve problems.",
        )}
      </p>
      <ol className="career-timeline">
        {experiences.map((experience, index) => (
          <li key={experience.id}>
            <div className="career-date">
              <time dateTime={experience.start}>
                {formatMonth(experience.start, language)}
              </time>{" "}
              —{" "}
              {experience.end ? (
                <time dateTime={experience.end}>
                  {formatMonth(experience.end, language)}
                </time>
              ) : (
                t("atual", "present")
              )}
            </div>
            <div className="career-entry">
              <h3>{experience.company}</h3>
              <p className="career-role">{experience.title[language]}</p>
              {compact && index > 1 ? (
                <details>
                  <summary>
                    {t("O que fiz por aqui", "What I did here")}
                  </summary>
                  <p>{experience.description[language]}</p>
                  <div className="tags">
                    {experience.tags.map((tag) => (
                      <span key={typeof tag === "string" ? tag : tag.en}>
                        {typeof tag === "string" ? tag : tag[language]}
                      </span>
                    ))}
                  </div>
                </details>
              ) : (
                <>
                  <p>{experience.description[language]}</p>
                  <div className="tags">
                    {experience.tags.map((tag) => (
                      <span key={typeof tag === "string" ? tag : tag.en}>
                        {typeof tag === "string" ? tag : tag[language]}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
