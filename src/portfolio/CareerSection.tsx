import { messages } from "./messages/careerSection";
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

export function CareerSection({ language }: { language: Language }) {
  return (
    <section
      className="section career-section"
      id="experience"
      aria-labelledby="experience-title"
    >
      <span className="eyebrow">{messages.myJourney[language]}</span>
      <h2 id="experience-title">
        {messages.whereILearnedWhatIBuilt[language]}
      </h2>
      <p className="section-intro">
        {messages.iStartedCloseToThePeople[language]}
      </p>
      <ol className="career-timeline">
        {experiences.map((experience) => (
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
                messages.present[language]
              )}
            </div>
            <div className="career-entry">
              <h3>{experience.company}</h3>
              <p className="career-role">{experience.title[language]}</p>
              <p className="career-highlight">
                {experience.highlight[language]}
              </p>
              <details>
                <summary>
                  {messages.responsibilitiesAndTechnologies[language]}
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
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
