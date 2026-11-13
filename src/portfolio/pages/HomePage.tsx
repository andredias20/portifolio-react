import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { type Language } from "../content";
import portrait from "../../assets/profile.jpeg";
export default function HomePage({ language }: { language: Language }) {
  const t = (pt: string, en: string) => (language === "pt" ? pt : en);
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">
            <span className="status-dot" />{" "}
            {t(
              "ANDRÉ DE CARLI DIAS · TOLEDO, PR",
              "ANDRÉ DE CARLI DIAS · TOLEDO, BRAZIL",
            )}
          </span>
          <h1>
            {t("Oi, eu sou o André.", "Hi, I’m André.")}
          </h1>
          <p>
            {t(
              "Sou desenvolvedor e tenho o hábito de ir atrás do que me desperta curiosidade. Este é meu espaço para contar o que faço, o que aprendo e o que gosto de explorar.",
              "I’m a developer and someone who follows their curiosity. This is my space to share what I do, what I learn and what I enjoy exploring.",
            )}
          </p>
          <div className="actions">
            <Link className="button primary" to="/about">
              {t("Sobre mim", "About me")}
              <ArrowUpRight size={18} />
            </Link>
            <Link className="text-link" to="/life">
              {t("Meu lado pessoal", "My personal side")}
              <ArrowRight size={18} />
            </Link>
          </div>
          <div className="hero-meta">
            <span>01 / {t("PESSOA", "PERSON")}</span>
            <span>02 / {t("DESENVOLVEDOR", "DEVELOPER")}</span>
            <span>03 / {t("CURIOSO", "CURIOUS")}</span>
          </div>
        </div>
        <img className="home-portrait" src={portrait} alt="André Dias" />
      </section>
      <div className="home-paths">
        <Link to="/about">
          <span className="eyebrow">
            01 / {t("PROFISSIONAL", "PROFESSIONAL")}
          </span>
          <h2>{t("Minha trajetória", "My career")}</h2>
          <p>
            {t(
              "Experiências, contribuições e formação.",
              "Experience, contributions and education.",
            )}
          </p>
          <ArrowUpRight aria-hidden="true" />
        </Link>
        <Link to="/projects">
          <span className="eyebrow">02 / {t("PROJETOS", "PROJECTS")}</span>
          <h2>{t("O que construo", "What I build")}</h2>
          <p>
            {t(
              "Projetos e experimentos em código.",
              "Projects and experiments in code.",
            )}
          </p>
          <ArrowUpRight aria-hidden="true" />
        </Link>
        <Link to="/life">
          <span className="eyebrow">03 / {t("PESSOAL", "PERSONAL")}</span>
          <h2>{t("Fora do trabalho", "Outside work")}</h2>
          <p>
            {t(
              "Interesses, música e tempo livre.",
              "Interests, music and spare time.",
            )}
          </p>
          <ArrowUpRight aria-hidden="true" />
        </Link>
      </div>
    </>
  );
}
