import { Terminal } from "lucide-react";
import { PersonalPhoto } from "../PersonalPhoto";
import type { Language } from "../content";
import { heading } from "../PageHeading";

export default function SetupPage({ language }: { language: Language }) {
  const t = (pt: string, en: string) => (language === "pt" ? pt : en);
  return (
    <>
      {heading(
        t("04 / AMBIENTE", "04 / WORKSPACE"),
        t("Meu canto de criar.", "My corner for creating."),
        t(
          "A mesa, a máquina e as ferramentas que uso.",
          "The desk, machine and tools I use.",
        ),
      )}
      <div className="setup-overview">
        <PersonalPhoto photo="setup" language={language} />
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
      </div>
      <div className="hardware-photos">
        <PersonalPhoto photo="hardware" language={language} />
        <PersonalPhoto photo="server" language={language} />
      </div>
    </>
  );
}
