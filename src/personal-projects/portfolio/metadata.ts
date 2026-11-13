import type { ProjectMetadata } from "../../portfolio/projects";
import architecture from "./architecture.svg";
const project: ProjectMetadata = {
  slug: "portfolio",
  title: { pt: "Portfólio pessoal", en: "Personal portfolio" },
  description: {
    pt: "Meu espaço na web: trajetória profissional, projetos e interesses pessoais em uma aplicação modular, responsiva e bilíngue.",
    en: "My space on the web: professional experience, projects and personal interests in a modular, responsive and bilingual application.",
  },
  tags: ["React", "TypeScript", "Vite", "React Router", "CSS"],
  status: { pt: "Em evolução", en: "Evolving" },
  preview: architecture,
};
export default project;
