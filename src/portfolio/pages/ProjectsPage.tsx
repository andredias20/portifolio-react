import type { Language } from "../content";
import { heading } from "../PageHeading";
import { ProjectCards } from "../ProjectCards";
export default function ProjectsPage({ language }: { language: Language }) {
  const t = (pt: string, en: string) => (language === "pt" ? pt : en);
  return (
    <>
      {heading(
        t("02 / PROJETOS", "02 / PROJECTS"),
        t("Código em prática.", "Code in practice."),
        t(
          "Projetos independentes. Espaço para novas ideias.",
          "Independent projects. Room for new ideas.",
        ),
      )}
      <ProjectCards language={language} />
    </>
  );
}
