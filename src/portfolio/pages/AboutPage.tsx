import { messages } from "../messages/about";
import { CareerSection } from "../CareerSection";
import { LearningSection } from "../LearningSection";
import { ArrowUpRight } from "lucide-react";
import portrait from "../../assets/profile.jpeg";
import { professionalLinks, type Language } from "../content";
import { heading } from "../PageHeading";
export default function AboutPage({ language }: { language: Language }) {
  return (
    <>
      {heading(
        messages.about[language],
        messages.greeting[language],
        messages.curiosityAsAStartingPoint[language],
      )}
      <div className="about-grid">
        <div className="article-body">
          <h2>{messages.specialty[language]}</h2>
          <p>{messages.professionalSummary[language]}</p>
          <p>{messages.supportPerspective[language]}</p>
          <p>{messages.curiosityAtWork[language]}</p>
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
        <img src={portrait} alt="André Dias" width="240" height="240" />
      </div>
      <CareerSection language={language} />
      <LearningSection language={language} />
    </>
  );
}
