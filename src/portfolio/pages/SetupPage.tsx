import { messages } from "../messages/setup";
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
  return (
    <>
      {heading(
        messages.workspace[language],
        messages.myCornerForCreating[language],
        messages.theDeskMachineAndToolsI[language],
      )}
      <div className="setup-overview">
        <WorkspacePhotos
          language={language}
          onServerClick={handleServerClick}
        />
        {crashed ? (
          <section
            className="blue-screen"
            aria-label={messages.serverBlueScreen[language]}
          >
            <div className="blue-screen-face" aria-hidden="true">
              :(
            </div>
            <h2>{messages.yourServerRanIntoAProblem[language]}</h2>
            <p>{messages.youPokedTheServerMoreThan[language]}</p>
            <p>{messages.complete[language]}</p>
            <small>{messages.stopCode[language]}: TOO_MANY_PINGS</small>
            <button type="button" className="restart-button" onClick={restart}>
              {messages.restart[language]} ↻
            </button>
          </section>
        ) : (
          <div className="terminal">
            <div className="terminal-bar">
              <span className="dots">● ● ●</span>
              <span>andre@{messages.workspace2[language]}: ~</span>
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
                {messages.fullStackBackendDeveloper[language]}
              </p>
              <div className="terminal-rule" />
              <p>
                <em>➜</em> <span>~</span> cat {messages.interestsConf[language]}
              </p>
              <dl>
                <dt>editor</dt>
                <dd>VS Code / {messages.jetbrainsIdes[language]}</dd>
                <dt>{messages.os[language]}</dt>
                <dd>
                  Arch Linux
                  <small className="hardware-aside">
                    {messages.ohAnOmarchyDistroBtw[language]}
                  </small>
                </dd>
                <dt>{messages.hardware[language]}</dt>
                <dd>
                  Ryzen 5 5600G / 32GB RAM / RX 7600
                  <small className="hardware-aside">
                    {messages.iKnowIKnowAMachine[language]}
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
                      messages.withGreatPermissionsComeGreatBills[language],
                    );
                  else setReply(messages.commandNotFound[language]);
                  setCommand("");
                }}
              >
                <label htmlFor="terminal-command-input">
                  <em>➜</em> ~{" "}
                  <span className="sr-only">
                    {messages.terminalCommand[language]}
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
                  aria-label={messages.runCommand[language]}
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
              <span>{messages.interestsConf[language]}</span>
              <span>utf-8 ↗ 100%</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
