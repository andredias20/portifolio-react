import { MusicSection } from "../MusicSection";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight, Terminal, Cpu, Gauge } from "lucide-react";
import { type Language } from "../content";
import portrait from "../../assets/profile.jpeg";
import { CareerSection } from "../CareerSection";
import { LearningSection } from "../LearningSection";
import { ProjectCards } from "../ProjectCards";
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
            <br />
            <span>{t("Curioso por natureza.", "Curious by nature.")}</span>
          </h1>
          <p>
            {t(
              "Sou desenvolvedor, gosto de Linux e tenho o hábito de ir atrás do que me desperta curiosidade. Este é meu espaço para contar o que faço, o que aprendo e o que gosto de explorar.",
              "I’m a developer, a Linux enthusiast, and someone who follows their curiosity. This is my space to share what I do, what I learn and what I enjoy exploring.",
            )}
          </p>
          <div className="actions">
            <Link className="button primary" to="/about#experience">
              {t("Conheça minha trajetória", "Explore my journey")}
              <ArrowUpRight size={18} />
            </Link>
            <Link className="text-link" to="/about">
              {t("Mais sobre mim", "More about me")}
              <ArrowRight size={18} />
            </Link>
          </div>
          <div className="hero-meta">
            <span>01 / {t("PESSOA", "PERSON")}</span>
            <span>02 / {t("DESENVOLVEDOR", "DEVELOPER")}</span>
            <span>03 / {t("CURIOSO", "CURIOUS")}</span>
          </div>
        </div>
        <div className="terminal">
          <div className="terminal-bar">
            <span className="dots">● ● ●</span>
            <span>andre@{t("ambiente", "workspace")}: ~</span>
            <Terminal size={14} />
          </div>
          <div className="terminal-content">
            <p>
              <em>➜</em> <span>~</span> whoami
            </p>
            <h2>
              André Dias<span className="cursor">_</span>
            </h2>
            <p className="muted">
              {t(
                "Desenvolvedor de aplicações e sistemas",
                "Full Stack / Backend Developer",
              )}
            </p>
            <div className="terminal-rule" />
            <p>
              <em>➜</em> <span>~</span> cat{" "}
              {t("interesses.conf", "interests.conf")}
            </p>
            <dl>
              <dt>editor</dt>
              <dd>VS Code / {t("IDEs da JetBrains", "JetBrains IDEs")}</dd>
              <dt>{t("sistema", "os")}</dt>
              <dd>
                Arch Linux
                <small className="hardware-aside">
                  {t(
                    "// Ah, é uma distribuição Omarchy, aliás",
                    "// Oh, an Omarchy distro, btw",
                  )}
                </small>
              </dd>
              <dt>{t("máquina", "hardware")}</dt>
              <dd>
                Ryzen 5 5600G / 32GB RAM / RX 7600
                <small className="hardware-aside">
                  {t(
                    "// eu sei, eu sei… uma metralhadora montada numa bike.",
                    "// I know, I know… a machine gun mounted on a bike.",
                  )}
                </small>
              </dd>
              <dt>{t("fora da tela", "off_screen")}</dt>
              <dd>
                {t("bicicleta / carros / violão", "bike / cars / guitar")}
              </dd>
            </dl>
            <p>
              <em>➜</em> <span>~</span> <span className="cursor">▌</span>
            </p>
          </div>
          <div className="terminal-footer">
            <span>VS CODE</span>
            <span>{t("interesses.conf", "interests.conf")}</span>
            <span>utf-8 ↗ 100%</span>
          </div>
        </div>
      </section>
      <div className="interest-strip">
        <span>
          <Terminal /> {t("VS CODE E LINUX", "VS CODE & LINUX")}
        </span>
        <span>
          <Cpu /> {t("EQUIPAMENTOS E SERVIDORES", "HARDWARE & SERVERS")}
        </span>
        <span>
          <Gauge /> {t("SEMPRE EM MOVIMENTO", "BUILT FOR MOMENTUM")}
        </span>
      </div>
      <section className="personal-intro section">
        <img src={portrait} alt="André Dias" />
        <div>
          <span className="eyebrow">
            {t("A PESSOA POR TRÁS DO CÓDIGO", "THE PERSON BEHIND THE CODE")}
          </span>
          <h2>
            {t(
              "Muita coisa começa com um ‘e se?’.",
              "A lot starts with ‘what if?’. ",
            )}
          </h2>
          <p>
            {t(
              "Sou uma pessoa extremamente curiosa. Gosto de pesquisar no meu tempo livre, experimentar ferramentas e entender como as coisas funcionam. Várias das ideias que levei para as empresas e que deram mais certo nasceram assim: de algo que me chamou a atenção e que resolvi estudar por conta própria.",
              "I’m an extremely curious person. I like researching in my free time, trying tools and understanding how things work. Several of the ideas I brought to companies that worked best started that way: something caught my attention, and I decided to study it on my own.",
            )}
          </p>
          <p>
            {t(
              "Também tem bicicleta, violão, academia, carros e a vontade de mexer em um PC só para entender mais um pouco. Nem toda curiosidade precisa virar trabalho.",
              "There’s also cycling, guitar, the gym, cars, and the urge to tinker with a PC just to understand a little more. Not every curiosity has to become work.",
            )}
          </p>
          <Link className="text-link" to="/life">
            {t("Mais sobre o meu lado pessoal", "More about my personal side")}
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
      <MusicSection language={language} />
      <CareerSection language={language} compact />
      <LearningSection language={language} />
      <section className="section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">
              01 / {t("SELEÇÃO", "SELECTED WORK")}
            </span>
            <h2>{t("O que ando construindo.", "What I’m building.")}</h2>
          </div>
          <Link className="text-link" to="/projects">
            {t("Todos os projetos", "All projects")}
            <ArrowUpRight size={18} />
          </Link>
        </div>
        <ProjectCards language={language} />
      </section>
      <section className="life-banner">
        <span className="eyebrow">{t("FORA DA TELA", "OFFLINE MODE")}</span>
        <h2>
          {t(
            "A vida também roda fora da tela.",
            "Life runs beyond the screen.",
          )}
        </h2>
        <Link className="text-link" to="/life">
          {t("Conheça meu outro lado", "Meet my other side")}
          <ArrowUpRight size={18} />
        </Link>
      </section>
    </>
  );
}
