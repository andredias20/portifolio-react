import { ArrowRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { navigation, pagePaths, type Language } from "./content";

export function PageFlow({ language }: { language: Language }) {
  const { pathname } = useLocation();
  const currentIndex = navigation.findIndex(([path]) => path === pathname);
  const isProject = pathname.startsWith("/projects/");
  const next = isProject
    ? navigation.find(([path]) => path === pagePaths.projects)
    : currentIndex >= 0
      ? navigation[(currentIndex + 1) % navigation.length]
      : null;
  if (!next) return null;
  const [path, pt, en] = next;
  return (
    <Link className="page-flow" to={path}>
      <span>
        <span className="eyebrow">
          {language === "pt"
            ? isProject
              ? "VOLTAR À VITRINE"
              : path === "/"
                ? "DE VOLTA AO COMEÇO"
                : "CONTINUE POR AQUI"
            : isProject
              ? "BACK TO PROJECTS"
              : path === "/"
                ? "BACK TO THE START"
                : "CONTINUE EXPLORING"}
        </span>
        <span className="page-flow-title">{language === "pt" ? pt : en}</span>
      </span>
      <ArrowRight size={32} aria-hidden="true" />
    </Link>
  );
}
