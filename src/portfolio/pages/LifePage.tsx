import { messages } from "../messages/life";
import { Link } from "react-router-dom";
import { PersonalPhoto } from "../PersonalPhoto";
import { MusicSection } from "../MusicSection";
import type { Language } from "../content";
import { heading } from "../PageHeading";
import { personalInterests } from "../interests";

export default function LifePage({ language }: { language: Language }) {
  return (
    <>
      {heading(
        messages.personalLifeSkills[language],
        messages.andrOutsideWork[language],
        messages.curiosityDoesnTStopAfterWork[language],
      )}
      <nav
        className="interest-navigation"
        aria-label={messages.personalInterests[language]}
      >
        <a href="#music">{messages.music[language]}</a>
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
            <div className="story-content">
              <h2>{interest.title[language]}</h2>
              {interest.paragraphs.map((paragraph, paragraphIndex) => (
                <p key={paragraphIndex}>{paragraph[language]}</p>
              ))}
              {interest.id === "bike" && (
                <PersonalPhoto photo="bike" language={language} />
              )}
              {interest.id === "gym" && (
                <PersonalPhoto photo="gym" language={language} />
              )}
              {interest.id === "hardware" && (
                <Link className="text-link" to="/setup">
                  {messages.seeMyWorkspaceAndEquipment[language]}
                </Link>
              )}
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
