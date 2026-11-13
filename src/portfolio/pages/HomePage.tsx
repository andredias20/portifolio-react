import { messages } from "../messages/home";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { type Language } from "../content";
import portrait from "../../assets/profile.jpeg";
export default function HomePage({ language }: { language: Language }) {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">
            <span className="status-dot" />{" "}
            {messages.andrDeCarliDiasToledoBrazil[language]}
          </span>
          <h1>{messages.hiIMAndr[language]}</h1>
          <p>{messages.iDevelopCorporateSystemsIntegrationsAnd[language]}</p>
          <div className="actions">
            <Link className="button primary" to="/about">
              {messages.aboutMe[language]}
              <ArrowUpRight size={18} />
            </Link>
            <Link className="text-link" to="/life">
              {messages.myPersonalSide[language]}
              <ArrowRight size={18} />
            </Link>
          </div>
          <div className="hero-meta">
            <span>01 / {messages.person[language]}</span>
            <span>02 / {messages.developer[language]}</span>
            <span>03 / {messages.curious[language]}</span>
          </div>
        </div>
        <img className="home-portrait" src={portrait} alt="André Dias" />
      </section>
      <div className="home-paths">
        <Link to="/about">
          <span className="eyebrow">
            01 / {messages.professional[language]}
          </span>
          <h2>{messages.myCareer[language]}</h2>
          <p>{messages.experienceContributionsAndEducation[language]}</p>
          <ArrowUpRight aria-hidden="true" />
        </Link>
        <Link to="/projects">
          <span className="eyebrow">02 / {messages.projects[language]}</span>
          <h2>{messages.whatIBuild[language]}</h2>
          <p>{messages.projectsAndExperimentsInCode[language]}</p>
          <ArrowUpRight aria-hidden="true" />
        </Link>
        <Link to="/life">
          <span className="eyebrow">03 / {messages.personal[language]}</span>
          <h2>{messages.outsideWork[language]}</h2>
          <p>{messages.interestsMusicAndSpareTime[language]}</p>
          <ArrowUpRight aria-hidden="true" />
        </Link>
      </div>
    </>
  );
}
