import { trackEvent } from "../../analytics/events";
import { useRef, useState } from "react";
import { getQuitMessage, shouldCrashServer } from "../easterEggs";
import { Terminal } from "lucide-react";
import { WorkspacePhotos } from "../WorkspacePhotos";
import type { Language } from "../content";
import { heading } from "../PageHeading";

export default function SetupPage({ language }: { language: Language }) {
  const serverClicks = useRef(0);
  const [crashed, setCrashed] = useState(false);
  const [command, setCommand] = useState("");
  const [reply, setReply] = useState("");
  const handleServerClick = () => {
    if (crashed) return true;
    serverClicks.current += 1;
    if (shouldCrashServer(serverClicks.current)) {
      trackEvent("easter_egg", { egg: "blue_screen" });
      setCrashed(true);
      return true;
    }
    return false;
  };
  const restart = () => {
    trackEvent("terminal_restart");
    serverClicks.current = 0;
    setCrashed(false);
    setCommand("");
    setReply("");
  };
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
        <WorkspacePhotos
          language={language}
          onServerClick={handleServerClick}
        />
        {crashed ? (
          <section
            className="blue-screen"
            aria-label={t("Tela azul do servidor", "Server blue screen")}
          >
            <div className="blue-screen-face" aria-hidden="true">
              :(
            </div>
            <h2>
              {t(
                "Seu servidor encontrou um problema e precisa ser reiniciado.",
                "Your server ran into a problem and needs to restart.",
              )}
            </h2>
            <p>
              {t(
                "Você cutucou o servidor mais de 10 vezes. Até carro velho tem limite.",
                "You poked the server more than 10 times. Even an old car has its limits.",
              )}
            </p>
            <p>{t("100% concluído", "100% complete")}</p>
            <small>{t("Código de parada", "Stop code")}: TOO_MANY_PINGS</small>
            <button type="button" className="restart-button" onClick={restart}>
              {t("Reiniciar", "Restart")} ↻
            </button>
          </section>
        ) : (
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
              <form
                className="terminal-command"
                onSubmit={(event) => {
                  event.preventDefault();
                  if (handleServerClick()) return;
                  const value = command.trim();
                  trackEvent("terminal_command", {
                    command:
                      value === ":wq" || value === "sudo" ? value : "unknown",
                  });
                  if (value === ":wq" || value === "sudo")
                    trackEvent("easter_egg", {
                      egg: value === ":wq" ? "quit" : "sudo",
                    });
                  if (value === ":wq") setReply(getQuitMessage(language));
                  else if (value === "sudo")
                    setReply(
                      t(
                        "Com grandes permissões vêm grandes boletos.",
                        "With great permissions come great bills.",
                      ),
                    );
                  else
                    setReply(
                      t("Comando não encontrado.", "Command not found."),
                    );
                  setCommand("");
                }}
              >
                <label htmlFor="terminal-command-input">
                  <em>➜</em> ~{" "}
                  <span className="sr-only">
                    {t("Comando do terminal", "Terminal command")}
                  </span>
                </label>
                <input
                  id="terminal-command-input"
                  value={command}
                  onChange={(event) => setCommand(event.target.value)}
                  autoComplete="off"
                  autoCapitalize="off"
                  spellCheck={false}
                />
                <button
                  type="submit"
                  aria-label={t("Executar comando", "Run command")}
                >
                  ↵
                </button>
              </form>
              <p role="status" className="terminal-reply">
                {reply}
              </p>
            </div>
            <div className="terminal-footer">
              <span>VS CODE</span>
              <span>{t("interesses.conf", "interests.conf")}</span>
              <span>utf-8 ↗ 100%</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
