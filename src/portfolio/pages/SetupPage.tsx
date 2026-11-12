import type { Language } from "../content";
import { heading } from "../PageHeading";

export default function SetupPage({ language }: { language: Language }) {
  const t = (pt: string, en: string) => (language === "pt" ? pt : en);
  return (
    <>
      {heading(
        t("04 / AMBIENTE", "04 / WORKSPACE"),
        t("Meu ponto de partida.", "My starting point."),
        t(
          "Ferramentas, hardware e ambiente de trabalho.",
          "Tools, hardware and workspace.",
        ),
      )}
      <div className="skill-grid">
        {[
          [
            "01",
            t("VS Code e Linux", "VS Code & Linux"),
            t(
              "VS Code é meu editor principal. Linux também faz parte do que gosto de explorar.",
              "VS Code is my main editor. Linux is also something I enjoy exploring.",
            ),
          ],
          [
            "02",
            t("Equipamentos e servidores", "Hardware & Servers"),
            t(
              "Espaço reservado para as especificações do meu setup.",
              "A space reserved for my setup specifications.",
            ),
          ],
          [
            "03",
            t("Ferramentas criativas", "Creative tools"),
            "CorelDraw / Photoshop / Illustrator",
          ],
        ].map(([number, title, description]) => (
          <article className="skill-card" key={number}>
            <span className="eyebrow">
              {number} / {t("AMBIENTE", "SETUP")}
            </span>
            <h2>{title}</h2>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </>
  );
}
