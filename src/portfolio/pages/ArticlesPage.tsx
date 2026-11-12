import type { Language } from "../content";
import { heading } from "../PageHeading";
import { Terminal } from "lucide-react";

export default function ArticlesPage({ language }: { language: Language }) {
  const t = (pt: string, en: string) => (language === "pt" ? pt : en);
  return (
    <>
      {heading(
        t("03 / DIÁRIO", "03 / LOGBOOK"),
        t("Notas de construção.", "Building notes."),
        t(
          "Código, descobertas e ideias para compartilhar.",
          "Code, discoveries and ideas to share.",
        ),
      )}
      <div className="empty-state">
        <Terminal />
        <h2>{t("Primeiro artigo em breve.", "First article coming soon.")}</h2>
        <p>
          {t(
            "Este espaço vai reunir aprendizados sobre desenvolvimento, hardware e IA.",
            "This space will collect lessons on development, hardware and AI.",
          )}
        </p>
        <span className="eyebrow">
          {t("ESTADO: RASCUNHO_", "STATUS: DRAFT_")}
        </span>
      </div>
    </>
  );
}
